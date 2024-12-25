var url = require('url');

var studentList = [{
    id: 1,
    name: 'emp1'
}, {
    id: 2,
    name: 'stu2'
}, {
    id: 3,
    name: 'em3'
}, {
    id: 4,
    name: 'st4'
}, {
    id: 5,
    name: 'empp5'
}, {
    id: 6,
    name: 'stuu6'
}, {
    id: 7,
    name: 'emp7'
}, {
    id: 8,
    name: 'stu8'
}, {
    id: 9,
    name: 'empstu9'
}];

exports.getStudents = function (req, res) {
    var url_parts = url.parse(req.url, true);
    console.log(url_parts.query.name);
    studentFilterList = studentList.filter((studentItem) => {
        return studentItem.name.includes(url_parts.query.name);
    });
    res.status(200).json({
        status: "success",
        length: studentFilterList.length,
        data: {
            students: studentFilterList,
        }
    });
}