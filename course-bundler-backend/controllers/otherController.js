import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";

export const contact = catchAsyncError(async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return next(new ErrorHandler("Please Enter all fields", 400));

  const to = process.env.MY_MAIL;

  const subject = "Contact from CourseVerse";
  const text = `I am ${name} and my Email is ${email}.\n${message}`;

  await sendEmail(to, subject, text);

  res.status(200).json({
    success: true,
    message: "Your message has been sent",
  });
});
export const courseRequest = catchAsyncError(async (req, res, next) => {
  const { name, email, course } = req.body;
  if (!name || !email || !course) return next(new Error("Missing fields", 400));
  const to = process.env.MY_MAIL;
  const subject = "Requesting for a course on CourseVerse";
  const text = `I am ${name} and my Email is ${email}.\n
    ${course}`;
  await sendEmail(to, subject, text);
  res.status(200).json({
    status: "success",
    message: "Your Request has been send ",
  });
});
export const getDashboardStats = catchAsyncError(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "Contact page works!",
  });
});

