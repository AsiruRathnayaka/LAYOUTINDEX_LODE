import Device from "../models/device.js";
import Location from "../models/location.js";
const deviceController = {
  getAllDevices: async (req, res) => {
    try {
      const devices = await Device.find();
      res.json({
        message: "All devices were successfully retrieved.",
        data: devices,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  getDeviceById: async (req, res) => {
    const id = req.params.id;
    try {
      const device = await Device.findOne({ _id: id });
      res.json({
        message: "Device was successfully retrieved.",
        data: device,
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  updateDeviceById: async (req, res) => {
    try {
      const id = req.params.id;
      const { serialNumber, type, image, status } = req.body;

      const CurrentDevice = await Device.findOne({
        _id: id,
      });
      if (!CurrentDevice)
        return res.status(400).json({
          message:
            "Device update failed. No such device found in the database.",
        });
      if (CurrentDevice.serialNumber !== serialNumber) {
        const ExistingDevice = await Device.findOne({
          serialNumber: serialNumber,
        });
        if (ExistingDevice)
          return res.status(400).json({
            message:
              "Device update failed. A device with the same serial number already exists.",
          });
      }

      await Device.findOneAndUpdate(
        { _id: id },
        { serialNumber, type, image, status }
      );
      res.json({
        message: "Device was successfully updated.",
        data: { serialNumber, type, image, status },
      });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
export default deviceController;
