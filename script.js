// Base setup by Leader jJie57
const form = document.getElementById("gpaForm");
const subjectNameInput = document.getElementById("subjectName");
const subjectGradeInput = document.getElementById("subjectGrade");
const subjectUnitsInput = document.getElementById("subjectUnits");

let subjects = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted - waiting for Dev 1 and Dev 2 features");
    form.reset();
});
