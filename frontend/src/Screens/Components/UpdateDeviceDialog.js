import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { Edit } from "@mui/icons-material";
import { DialogContent, IconButton, DialogTitle } from "@mui/material";
import UpdateDeviceForm from "./UpdateDeviceForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateDeviceDialog(props) {
  const { DeviceId, reFetch, setReFetch } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <Edit />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle>Update Device</DialogTitle>
        <DialogContent>
          <UpdateDeviceForm
            DeviceId={DeviceId}
            setOpen={setOpen}
            reFetch={reFetch}
            setReFetch={setReFetch}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
