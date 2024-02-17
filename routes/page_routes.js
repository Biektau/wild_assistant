import express from "express";
import {
  get_home_page,
  get_instagram_bonus_page,
} from "../controllers/page_controllers.js";

const route = express.Router();

route.get("/", get_home_page);
route.get("/instagram_bonus", get_instagram_bonus_page);

export default route;
