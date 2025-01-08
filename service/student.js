var url = require('url');

var studentList = [{
    id: 1,
    name: 'emp1',
    mobile: 9959453851,
    email: 'emp1@gmail.com'
}, {
    id: 2,
    name: 'stu2',
    mobile: 9959453852,
    email: 'emp2@gmail.com'
}, {
    id: 3,
    name: 'em3',
    mobile: 9959453853,
    email: 'emp3@gmail.com'
}, {
    id: 4,
    name: 'st4',
    mobile: 9959453854,
    email: 'emp4@gmail.com'
}, {
    id: 5,
    name: 'empp5',
    mobile: 9959453855,
    email: 'emp5@gmail.com'
}, {
    id: 6,
    name: 'stuu6',
    mobile: 9959453856,
    email: 'emp6@gmail.com'
}, {
    id: 7,
    name: 'emp7',
    mobile: 9959453857,
    email: 'emp7@gmail.com'
}, {
    id: 8,
    name: 'stu8',
    mobile: 9959453858,
    email: 'emp8@gmail.com'
}, {
    id: 9,
    name: 'empstu9',
    mobile: 9959453859,
    email: 'emp9@gmail.com'
}];

exports.getStudents = function (req, res) {
    var url_parts = url.parse(req.url, true);
    console.log(url_parts.query.name);
    studentFilterList = studentList.filter((student) => {
        return student?.name?.includes(url_parts.query.name);
    });
    res.status(200).json({
        status: "success",
        count: studentFilterList.length,
        students: studentFilterList
    });
}

exports.getStudent = function(req, res) {
    var url_parts = url.parse(req.url, true);
    console.log(req.params);
    studentFilterList = studentList.filter((student) => {
        return Number(student.id) === Number(req.params.id);
    });
    console.log(studentFilterList[0]);
    res.status(200).json({
        status: "success",
        student: studentFilterList[0],
    });
}

exports.addStudent = function(req, res) {
    var url_parts = url.parse(req.url, true);
    console.log(req.body);
    studentList.push(req.body);
    res.status(200).json({
        status: "success"
    });
}
//corect the logic
exports.updateStudent = function(req, res) {
    var url_parts = url.parse(req.url, true);
    console.log(req.body);
    studentList = studentList.map((student) => {
        if(Number(student.id) === Number(req.params.id)) {
            student = req.body;
        }
        return student;
    });
    console.log(studentList);
    res.status(200).json({
        status: "success"
    });
}
//corect the logic
exports.deleteStudent = function(req, res) {
    var url_parts = url.parse(req.url, true);
    console.log(req.params.id);
    studentList = studentList.filter((student) => {
        return Number(student.id) !== Number(req.params.id);
    });
    res.status(200).json({
        status: "success"
    });
}