import axios from "axios";
const baseUrl = "http://localhost:5000/api/";
export const CreateLocation = async (locationData) => {
  try {
    const response = await axios.post(
      `${baseUrl}location/create`,
      locationData
    );
    console.log("Location created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating location:", error);
    throw error;
  }
};
export const UpdateLocation = async (locationData, LocationId) => {
  try {
    const response = await axios.put(
      `${baseUrl}location/update/${LocationId}`,
      locationData
    );
    console.log("Location updated:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating location:", error);
    throw error;
  }
};
export const AddDeviceToLocation = async (DeviceData, LocationID) => {
  try {
    const response = await axios.put(
      `${baseUrl}location/addDevice/${LocationID}`,
      DeviceData
    );
    console.log("Device created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating Device:", error);
    throw error;
  }
};
export const RemoveDeviceFromLocation = async (DeviceId, LocationID) => {
  try {
    const response = await axios.put(
      `${baseUrl}location/removeDevice/${LocationID}`,
      { DeviceId }
    );
    console.log("Device created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating Device:", error);
    throw error;
  }
};
export const FetchLocations = async () => {
  try {
    const response = await axios.get(`${baseUrl}location/`);
    console.log("All Locations Fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching locations:", error);
    throw error;
  }
};
export const FetchOneLocation = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}location/${id}`);
    console.log("Location Fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
};
export const RemoveLocation = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}location/remove/${id}`);
    console.log("Location Removed:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error removing location:", error);
    throw error;
  }
};
