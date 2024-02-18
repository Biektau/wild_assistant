import express from "express";
import {
  get_home_page,
  get_instagram_bonus_page,
  get_feedback_bonus_page,
  get_question_page,
  get_action_page,
  get_items_page
} from "../controllers/page_controllers.js";

const route = express.Router();

route.get("/", get_home_page);
route.get("/instagram_bonus", get_instagram_bonus_page);
route.get("/feedback_bonus", get_feedback_bonus_page);
route.get("/question", get_question_page);
route.get("/action", get_action_page);
route.get("/items", get_items_page);

export default route;
