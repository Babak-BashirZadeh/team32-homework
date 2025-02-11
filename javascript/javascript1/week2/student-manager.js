const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName === "") {
        return "Please enter a valid name";
    } else if (class07Students.includes(studentName)) {
        return "Student is already in the class";
    } else if (class07Students.length >= 6 && studentName !== "Queen") {
        return "Cannot add more students to class 07";
    } else {
        class07Students.push(studentName);
    }
}

function getNumberOfStudents() {
    return class07Students.length;
}