import axios from "axios";
const baseUrl = "http://localhost:5000/api/";
export const GetImageURL = async (file) => {
  try {
    let formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(`${baseUrl}imageUpload`, formData, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    return res.data.url;
  } catch (err) {
    console.log(err.response.data.msg);
  }
};
