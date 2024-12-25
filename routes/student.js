var express = require('express');
var studentService = require('../service/student');

var studentRouter = express.Router();

studentRouter
  .route("/")
  .get(studentService.getStudents);

module.exports = studentRouter;
