import { Router } from "express";
const imageUploadRoute = Router();
import imageUploadController from "../controllers/imageUpload.js";

imageUploadRoute.post("/api/imageUpload", imageUploadController.uploadImage);
imageUploadRoute.post("/api/imageDestroy", imageUploadController.removeImage);

export default imageUploadRoute;
