import { Router } from "express";
import deviceController from "../controllers/device.js";

const deviceRoute = Router();

deviceRoute.get("/api/device/", deviceController.getAllDevices);
deviceRoute.get("/api/device/:id", deviceController.getDeviceById);
deviceRoute.put("/api/device/update/:id", deviceController.updateDeviceById);
export default deviceRoute;
