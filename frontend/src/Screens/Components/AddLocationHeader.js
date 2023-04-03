import { Box } from "@mui/system";
import {  Typography } from "@mui/material";
// import { LocationsData } from "../../Database/DataArrays";

const AddLocationHeader = () => {
//     const {LocationName, LocationAddress, LocationPhone, DeviceCount  }=props
//     const initialState = [
//         {
//         id:"",
//         serialNumber :"Abc123",
//         type :"pos",
//         image :"",
//         status :true,
//     },
//         {
//             id:"",
//         serialNumber :"Abc123",
//         type :"pos",
//         image :"",
//         status :true,
//     },
//         {
//             id:"",
//         serialNumber :"Abc123",
//         type :"pos",
//         image :"",
//         status :true,
//     },
//         {
//             id:"",
//         serialNumber :"Abc123",
//         type :"pos",
//         image :"",
//         status :true,
//     },
//         {
//             id:"",
//         serialNumber :"Abc123",
//         type :"pos",
//         image :"",
//         status :true,
//     },
//         {
//             id:"",
//         serialNumber :"Abc123",
//         type :"pos",
//         image :"",
//         status :true,
//     },
//         {
//             id:"",
//         serialNumber :"Abc123",
//         type :"pos",
//         image :"",
//         status :true,
//     },
//         {
//             id:"",
//         serialNumber :"Abc123",
//         type :"pos",
//         image :"",
//         status :true,
//     },
//         {
//             id:"",
//         serialNumber :"Abc123",
//         type :"pos",
//         image :"",
//         status :true,
//     },
// ]
//     const [devices, setDevices] = useState(initialState)
    

    
  return (
    <>
      <Box sx={{display:"flex", flexDirection: "row", alignItems: "center", justifyContent:"space-around"  , width:"15%" ,background: "#FBFBFB", padding:"5px", borderRadius:"12px"}} >
        <Typography sx={{fontFamily:"Quicksand-Medium" , fontSize:"20px"}} >ADD LOCATION</Typography>
      </Box>
    </>
  );
};

export default AddLocationHeader;
