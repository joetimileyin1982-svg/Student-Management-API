const express = require("express");
const app = express();
const PORT = 3000;

// Allows our API to receive JSON data 
app.use(express.json());

// In-memory database 
let students = [];
let nextId = 1;

// CREATE A STUDENT 
app.post("/students", (req, res) => {
    const { name, age, course } = req.body;

    if (!name || !age || !course) {
        return res.status(400).json({
            message: "Name, age and course are required"
        });
    }

    const student = {
        id: nextId,
        name: name,
        age: age,
        course: course
    };

    // FIXED TYPO HERE: changed student.push to students.push
    students.push(student);
    nextId++;

    res.status(201).json({
        message: "student created successfully",
        student: student 
    });
});

// GET ALL STUDENTS
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// GET ONE STUDENT 
app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "student not found"
        });
    }
    res.status(200).json(student);
});

// UPDATE A STUDENT 
app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(student => student.id === id);

    if (!student) {
        return res.status(404).json({
            message: "student not found"
        });
    }

    const { name, age, course } = req.body;
    if (name !== undefined) student.name = name;
    if (age !== undefined) student.age = age;   
    if (course !== undefined) student.course = course;

    res.status(200).json({
        message: "student updated successfully",
        student: student
    });
});

// DELETE A STUDENT 
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const studentIndex = students.findIndex(student => student.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "student not found"
        });
    }
    const deletedStudent = students.splice(studentIndex, 1);

    res.status(200).json({
        message: "student deleted successfully",
        student: deletedStudent[0]
    });
});

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
