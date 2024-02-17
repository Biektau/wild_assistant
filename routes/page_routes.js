import express from "express";
import { get_home_page } from "../controllers/page_controllers.js";

const route = express.Router();

route.get("/", get_home_page);

export default route;
