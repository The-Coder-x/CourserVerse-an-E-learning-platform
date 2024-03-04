import express from "express";
import {
  addLecture,
  createCourse,
  getAllCourses,
  getCourseLectures,
} from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// ? Get all courses without Lectures
router.route("/courses").get(getAllCourses);
//? create new courses only admin
router.route("/createcourse").post(singleUpload, createCourse);

//? add lecture,delete course,get course details
router
  .route("/course/:id")
  .get(getCourseLectures)
  .post(singleUpload, addLecture);
//? delete lecture

export default router;
