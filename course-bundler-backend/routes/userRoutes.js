import express from "express";
import {
  addToPlaylist,
  changePassword,
  forgetPassword,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();
// route for the registation
router.route("/register").post( singleUpload, register);
//route for the login
router.route("/login").post(login);
//route for the logout
router.route("/logout").get(logout);
//get my profile
router.route("/me").get(isAuthenticated, getMyProfile);
//change password
router.route("/changepassword").put(isAuthenticated, changePassword);
//update Profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);
//update Profile picture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateProfilePicture);
//forget password
router
  .route("/forgetpassword")
  .post(forgetPassword);
//reset password
router
  .route("/resetpassword/:token")
  .put(resetPassword);
//Add To Playlist
router
  .route("/addtoplaylist")
  .post(isAuthenticated, addToPlaylist);
//remove from  Playlist
router
  .route("/removefromplaylist")
  .delete(isAuthenticated, removeFromPlaylist);





export default router;
