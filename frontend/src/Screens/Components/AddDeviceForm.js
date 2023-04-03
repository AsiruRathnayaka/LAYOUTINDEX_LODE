import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/Cloud";
import { AddDeviceToLocation } from "../../Service/LocationAPI";
import { toast } from "react-toastify";
import { GetImageURL } from "../../Service/ImageUploadAPI";
import { useNavigate } from "react-router-dom";

const Styles = {
  formControl: {
    paddingTop: "10px",
    margin: "spacing(1)",
    minWidth: "120",
  },
  selectEmpty: {
    marginTop: "spacing(2)",
  },
};

export default function AddDeviceForm({ LocationID }) {
  const navigate = useNavigate();
  const initialPayloadState = {
    serialNumber: "",
    type: "",
    image: "",
  };
  const initialErrorState = {
    field: "",
    message: "",
  };
  const [devicePayload, setDevicePayload] = React.useState(initialPayloadState);
  const [error, setError] = React.useState(initialErrorState);

  const handleInputChange = (event, field) => {
    setDevicePayload({ ...devicePayload, [field]: event.target.value });
  };

  const isValid = () => {
    if (devicePayload.serialNumber === "") {
      setError({
        field: "serialNumber",
        message: "Serial Number cannot be empty",
      });
      return false;
    }
    if (devicePayload.type === "") {
      setError({
        field: "type",
        message: "You Missed The Type Here...",
      });
      return false;
    }
    if (devicePayload.image === "") {
      setError({
        field: "image",
        message: "Oops... You Forgot the Image",
      });
      return false;
    }
    setError({
      field: "",
      message: "",
    });
    return true;
  };

  const handleImageChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    try {
      if (!file) return toast.error("File not exist.");
      if (file.size > 1024 * 1024) return toast.error("Size too large!");
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        return toast.error("File format is incorrect.");
      const response = await GetImageURL(file);
      console.log("~ handleImageChange ~ response:", response);
      setDevicePayload({ ...devicePayload, image: response });
    } catch (error) {
      toast.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValid()) {
      console.log("Device submitted:", devicePayload);

      try {
        const response = await AddDeviceToLocation(devicePayload, LocationID);
        toast.success("Device added successfully");
        navigate(`/LocationOverview/${LocationID}`);
        console.log("Device added successfully:", response);
      } catch (error) {
        toast.error("Oops! something went wrong");
        navigate(`/LocationOverview/${LocationID}`);
        console.log("Error adding Device:", error);
      }
    }
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="serial-number"
          label="Serial Number"
          value={devicePayload.serialNumber}
          onChange={(event) => handleInputChange(event, "serialNumber")}
          variant="outlined"
          margin="normal"
          fullWidth
          error={error.field === "serialNumber"}
          helperText={error.field === "serialNumber" && error.message}
        />
        <FormControl variant="outlined" sx={Styles.formControl} fullWidth>
          <InputLabel sx={{ paddingTop: "10px" }} id="device-type-label">
            Device Type
          </InputLabel>
          <Select
            labelId="device-type-label"
            id="device-type"
            value={devicePayload.deviceType}
            onChange={(event) => handleInputChange(event, "type")}
            label="Device Type"
            error={error.field === "type"}
          >
            <MenuItem value="pos">POS</MenuItem>
            <MenuItem value="kiosk">Kiosk</MenuItem>
            <MenuItem value="signage">Signage</MenuItem>
          </Select>
          {error.field === "type" &&
          <Typography sx={{color:"red",fontSize:"12px",ml:"20px"}} >
             {error.message}
          </Typography>}
        </FormControl>
        <Box sx={{ display: "flex", alignItems: "center", paddingTop: "10px" }}>
          <input
            accept="image/*"
            id="image-upload"
            type="file"
            onChange={(event) => handleImageChange(event)}
            hidden
          />
          <label htmlFor="image-upload">
            <IconButton style={{ right: 0 }} color="black" component="span">
              <CloudUploadIcon />
            </IconButton>
            <Typography variant="subtitle2">
              {devicePayload.image ? devicePayload.image : "Upload Image"}
            </Typography>
          </label>
        </Box>
          {error.field === "image" &&
          <Typography sx={{color:"red",fontSize:"12px",ml:"20px"}} >
             {error.message}
          </Typography>}
        <Box
          sx={{
            display: "flex",
            mb: 2,
            paddingTop: "10px",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: 1, mr: 1, fontFamily: "Quicksand", background: "black" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
