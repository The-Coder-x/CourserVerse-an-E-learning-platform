import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  buySubscription,
  getRazorPayKey,
  paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();

// Buy subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);

// verify payment and save reference in database
router.route("/paymentverification").post(isAuthenticated, paymentVerification);

//get razorpay key
router.route("/razorpaykey").get(getRazorPayKey);

export default router;
