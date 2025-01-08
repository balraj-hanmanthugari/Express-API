var express = require('express');
var studentService = require('../service/student');

var studentRouter = express.Router();

studentRouter
  .route("/")
    .get(studentService.getStudents)
    .post(studentService.addStudent);
studentRouter
  .route("/:id")
    .get(studentService.getStudent)
    .put(studentService.updateStudent)
    .delete(studentService.deleteStudent);

module.exports = studentRouter;
