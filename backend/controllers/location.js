import Location from "../models/location.js";
import Device from "../models/device.js";

const locationController = {
  createLocation: async (req, res) => {
    try {
      const { name, address, phone } = req.body;

      const ExistingName = await Location.findOne({ name: name });
      if (ExistingName)
        return res.status(400).json({
          message: "Location already exists in the database.",
        });

      const newLocation = new Location({
        name,
        address,
        phone,
      });
      await newLocation.save();
      res.json({
        message: "New location added successfully.",
        data: newLocation,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  getAllLocations: async (req, res) => {
    try {
      const locations = await Location.find().populate("devices");
      res.json({
        message: "All locations fetched successfully.",
        data: locations,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  getLocationById: async (req, res) => {
    const id = req.params.id;
    try {
      const location = await Location.findOne({ _id: id }).populate("devices");
      res.json({
        message: "Location details fetched successfully.",
        data: location,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  updateLocation: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, address, phone } = req.body;

      await Location.findOneAndUpdate({ _id: id }, { name, address, phone });
      res.json({
        message: "Location updated successfully.",
        data: { name, address, phone },
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  addDeviceToLocation: async (req, res) => {
    try {
      const id = req.params.id;
      const { serialNumber, type, image, status } = req.body;

      const ExistingDevice = await Device.findOne({
        serialNumber: serialNumber,
      });
      const ExistingLocation = await Location.findOne({ _id: id });
      if (ExistingDevice)
        return res.status(400).json({
          message:
            "Device with this serial number already exists in the database.",
        });

      if (!ExistingLocation) {
        return res.status(400).json({
          message: "Location not found in the database.",
        });
      }

      const newDevice = new Device({
        serialNumber,
        type,
        image,
        status,
      });
      const newDeviceRes = await newDevice.save();
      console.log(" addDeviceToLocation: ~ newDeviceRes:", newDeviceRes);

      if (res) {
        res.json({
          message: "Device was successfully added to location.",
          data: newDevice,
        });

        await Location.updateOne(
          { _id: id },
          { $push: { devices: newDevice._id } }
        );
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },

  removeDeviceFromLocation: async (req, res) => {
    try {
      const LocationId = req.params.id;
      const { DeviceId } = req.body;

      const device = await Device.findOne({ _id: DeviceId });
      const location = await Location.findOne({ _id: LocationId });
      if (!device || !location) {
        return res.status(400).json({
          message: "Device not found in the database.",
        });
      }
      await Location.updateOne(
        { _id: LocationId },
        { $pull: { devices: DeviceId } }
      );
      await Device.findByIdAndDelete({ _id: DeviceId });
      if (res) {
        res.json({ message: "Device was successfully removed from location." });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  removeLocation: async (req, res) => {
    try {
      const LocationId = req.params.id;

      const location = await Location.findOne({ _id: LocationId });
      if (!location) {
        return res.status(400).json({
          message: "Location not found in the database.",
        });
      }
      await Location.findByIdAndDelete(
        { _id: LocationId }
      );
      if (res) {
        res.json({ message: "Location was successfully removed ." });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
export default locationController;
