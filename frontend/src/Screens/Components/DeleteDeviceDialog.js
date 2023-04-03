import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import { RemoveDeviceFromLocation } from "../../Service/LocationAPI";
import { toast } from "react-toastify";
import { IconButton } from "@mui/material";

export default function DeleteDeviceDialog({ DeviceId, LocationID,reFetch, setReFetch }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirm = async () => {
    try {
      const response = await RemoveDeviceFromLocation(DeviceId, LocationID);
      console.log("RemoveDeviceFromLocation ~ response:", response);
      toast.success("Removed device successfully");
      setReFetch(!reFetch)
      setOpen(false);
    } catch (error) {
      console.log("RemoveDeviceFromLocation ~ error:", error);
      toast.error("Oops! Something Went Wrong");
      setReFetch(!reFetch)
      setOpen(false);
    }
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon sx={{ color: "red" }} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to remove this device?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          This action will permanently delete all data associated with this device from our records and cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button sx={{ color: "red" }} onClick={handleConfirm} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
