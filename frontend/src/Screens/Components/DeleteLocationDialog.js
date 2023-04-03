import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import { RemoveLocation } from "../../Service/LocationAPI";
import { toast } from "react-toastify";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DeleteLocationDialog({ LocationID }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirm = async () => {
    try {
      const response = await RemoveLocation(LocationID);
      console.log("RemoveLocation ~ response:", response);
      toast.success("Removed location successfully");
      navigate("/Dashboard");
      setOpen(false);
    } catch (error) {
      console.log("RemoveLocation ~ error:", error);
      toast.error("Oops! Something Went Wrong");
      navigate("/Dashboard");
      setOpen(false);
    }
  };

  return (
    <>
      <Box
        component={Button}
        sx={{
          padding: "15px",
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          background: "red",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
          borderRadius: "12px",
        }}
        onClick={handleClickOpen}
      >
        <DeleteIcon sx={{ marginRight: "10px", color: "#FFFFFF" }} />
        <Typography
          sx={{
            fontFamily: "Quicksand",
            fontSize: "15px",
            fontWeight: "bold",
            color: "#FFFFFF",
          }}
        >
          Remove Location
        </Typography>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to remove this location?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action will permanently delete all data associated with this
            location from our records and cannot be undone.
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
