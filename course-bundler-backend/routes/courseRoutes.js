import express from "express";
import {
  addLecture,
  createCourse,
  deleteCourse,
  deleteLecture,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { AuthorizedAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// ? Get all courses without Lectures
router.route("/courses").get(getAllCourses);
//? create new courses only admin
router
  .route("/createcourse")
  .post(isAuthenticated, AuthorizedAdmin, singleUpload, createCourse);

//? add lecture,delete course,get course details
router
  .route("/course/:id")
  .get(isAuthenticated, getCourseLectures)
  .post(isAuthenticated, AuthorizedAdmin, singleUpload, addLecture)
  .delete(isAuthenticated, AuthorizedAdmin, deleteCourse);
//? delete lecture
  router.route("/lecture")
  .delete(isAuthenticated, AuthorizedAdmin, deleteLecture);

export default router;
