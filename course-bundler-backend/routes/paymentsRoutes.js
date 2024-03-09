import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  buySubscription,
  cancelSubscription,
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

// Cancel subscription 
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription);

export default router;
