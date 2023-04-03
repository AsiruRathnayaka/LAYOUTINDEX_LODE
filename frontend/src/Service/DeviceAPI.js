import axios from "axios";
const baseUrl = "http://localhost:5000/api/";
export const UpdateDevice = async (deviceData, deviceId) => {
  try {
    const response = await axios.put(
      `${baseUrl}device/update/${deviceId}`,
      deviceData
    );
    console.log("Device created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating device:", error);
    throw error;
  }
};
export const FetchOneDevice = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}device/${id}`);
    console.log("Device Fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching device:", error);
    throw error;
  }
};
