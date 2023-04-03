import { Router } from "express";
import locationController from "../controllers/location.js";

const locationRoute = Router();

locationRoute.post("/api/location/create", locationController.createLocation);

locationRoute.get("/api/location/", locationController.getAllLocations);

locationRoute.get("/api/location/:id", locationController.getLocationById);

locationRoute.put(
  "/api/location/update/:id",
  locationController.updateLocation
);

locationRoute.put(
  "/api/location/addDevice/:id",
  locationController.addDeviceToLocation
);

locationRoute.put(
  "/api/location/removeDevice/:id",
  locationController.removeDeviceFromLocation
);
locationRoute.delete(
  "/api/location/remove/:id",
  locationController.removeLocation
);

export default locationRoute;