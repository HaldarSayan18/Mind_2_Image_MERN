import { generateImage } from "../controllers/GenerateAllImage";

const express = require("express");

const router = express.Router();

router.post("/generateImg", generateImage);

export default router;