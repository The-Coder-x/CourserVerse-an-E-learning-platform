import express from "express";
import { AuthorizedAdmin, isAuthenticated } from "../middlewares/auth.js";
import {
  contact,
  courseRequest,
  getDashboardStats,
} from "../controllers/otherController.js";

const router = express.Router();

//Contact form
router.route("/contact").post(contact);
//Request form
router.route("/courserequest").post(courseRequest);

//get admin  dashboard stats
router
  .route("/admin/stats")
  .get(isAuthenticated, AuthorizedAdmin, getDashboardStats);

export default router;
