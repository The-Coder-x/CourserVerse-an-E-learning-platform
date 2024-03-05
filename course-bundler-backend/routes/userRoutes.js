import express from "express";
import {
  addToPlaylist,
  changePassword,
  deleteMyProfile,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
  updateUserRole,
} from "../controllers/userController.js";
import { AuthorizedAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();
// route for the registation
router.route("/register").post(singleUpload, register);
//route for the login
router.route("/login").post(login);
//route for the logout
router.route("/logout").get(logout);
//get my profile
router.route("/me").get(isAuthenticated, getMyProfile);
//get my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);
//change password
router.route("/changepassword").put(isAuthenticated, changePassword);
//update Profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);
//update Profile picture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateProfilePicture);
//forget password
router.route("/forgetpassword").post(forgetPassword);
//reset password
router.route("/resetpassword/:token").put(resetPassword);
//Add To Playlist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);
//remove from  Playlist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

// admin routes
router.route("/admin/users").get(isAuthenticated, AuthorizedAdmin, getAllUsers);
// admin routes
router
  .route("/admin/user/:id")
  .put(isAuthenticated, AuthorizedAdmin, updateUserRole)
  .delete(deleteUser);

export default router;
