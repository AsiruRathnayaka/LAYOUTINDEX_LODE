import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { Edit } from "@mui/icons-material";
import UpdateLocationForm from "../Screens/Components/UpdateLocationForm";
import { DialogContent, IconButton, DialogTitle } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const { LocationId, reFetch, setReFetch } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        sx={{ width: "36px", height: "36px", m: "5px" }}
        onClick={handleClickOpen}
      >
        <Edit />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Update Location</DialogTitle>
        <DialogContent>
          <UpdateLocationForm
            LocationId={LocationId}
            setOpen={setOpen}
            reFetch={reFetch}
            setReFetch={setReFetch}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
