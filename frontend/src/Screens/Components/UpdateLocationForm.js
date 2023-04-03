import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FetchOneLocation, UpdateLocation } from "../../Service/LocationAPI";
import { toast } from "react-toastify";

export default function UpdateLocationForm(props) {
  const { LocationId, setOpen, reFetch, setReFetch } = props;
  const initialPayloadState = {
    name: "",
    address: "",
    phone: "",
  };
  const initialErrorState = {
    field: "",
    message: "",
  };
  const [locationPayload, setLocationPayload] =
    React.useState(initialPayloadState);
  const [error, setError] = React.useState(initialErrorState);
  React.useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await FetchOneLocation(LocationId);
        console.log("~ fetchLocation ~ response:", response);
        setLocationPayload(response.data);
      } catch (err) {
        console.log("~ fetchLocation ~ err:", err);
      }
    };
    fetchLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInputChange = (event, field) => {
    setLocationPayload({ ...locationPayload, [field]: event.target.value });
  };

  const isValid = () => {
    if (locationPayload.name === "") {
      setError({
        field: "name",
        message: "Name cannot be empty",
      });
      return false;
    }
    if (locationPayload.address === "") {
      setError({
        field: "address",
        message: "Address cannot be empty",
      });
      return false;
    }
    if (locationPayload.phone === "") {
      setError({
        field: "phone",
        message: "Phone number cannot be empty",
      });
      return false;
    }
    setError({
      field: "",
      message: "",
    });
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValid()) {
      console.log("Location submitted:", locationPayload);

      try {
        const response = await UpdateLocation(locationPayload, LocationId);
        toast.success("Location updated successfully");
        setReFetch(!reFetch);
        setOpen(false);
        console.log("Location updated successfully:", response);
      } catch (error) {
        toast.error("Oops! something went wrong");
        setReFetch(!reFetch);
        setOpen(false);
        console.log("Error adding Location:", error);
      }
    }
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ fontFamily: "Quicksand" }}
          id="Name"
          label="Location Name"
          value={locationPayload.name}
          onChange={(event) => handleInputChange(event, "name")}
          variant="outlined"
          margin="normal"
          fullWidth
          error={error.field === "name"}
          helperText={error.field === "name" && error.message}
        />
        <TextField
          id="Address"
          label="Address"
          value={locationPayload.address}
          onChange={(event) => handleInputChange(event, "address")}
          variant="outlined"
          margin="normal"
          fullWidth
          error={error.field === "address"}
          helperText={error.field === "address" && error.message}
        />
        <TextField
          id="Phone"
          label="Phone"
          value={locationPayload.phone}
          onChange={(event) => handleInputChange(event, "phone")}
          variant="outlined"
          margin="normal"
          fullWidth
          error={error.field === "phone"}
          helperText={error.field === "phone" && error.message}
        />

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
            UPDATE
          </Button>
        </Box>
      </form>
    </Box>
  );
}
