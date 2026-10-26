let subjects = [];

const subjectNameInput = document.getElementById("subjectName");
const subjectGradeInput = document.getElementById("subjectGrade");
const subjectUnitsInput = document.getElementById("subjectUnits");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");

// Input Validation (Karen's feature)
function validateInput(subjectName, grade, units) {
    if (!subjectName || subjectName.trim() === "") {
        alert("Please enter a valid subject name.");
        return false;
    }
    if (isNaN(grade) || grade < 1.0 || grade > 5.0) {
        alert("Grade must be a valid number between 1.0 and 5.0.");
        return false;
    }
    if (isNaN(units) || units <= 0) {
        alert("Units must be greater than 0.");
        return false;
    }
    return true;
}

// Table Rendering & GPA Calculation (antonetonate's feature)
function updateTableAndGPA() {
    const tableBody = document.querySelector("#subjectTable tbody");
    const gpaResult = document.getElementById("gpaResult");
    tableBody.innerHTML = "";
    let totalPoints = 0;
    let totalUnits = 0;

    subjects.forEach((sub) => {
        const row = document.createElement("tr");
        row.innerHTML = '<td>${sub.name}</td><td>${sub.grade.toFixed(2)}</td><td>${sub.units}</td>';
        tableBody.appendChild(row);
        totalPoints += sub.grade * sub.units;
        totalUnits += sub.units;
    });

    const gpa = totalUnits > 0 ? (totalPoints / totalUnits) : 0;
    gpaResult.textContent = gpa.toFixed(2);
}

// Clear All Functionality (Karen's feature)
function clearAllData() {
    subjects = [];
    updateTableAndGPA();
    alert("All data has been cleared.");
}

addBtn.addEventListener("click", () => {
    const name = subjectNameInput.value;
    const grade = parseFloat(subjectGradeInput.value);
    const units = parseInt(subjectUnitsInput.value);

    if (validateInput(name, grade, units)) {
        subjects.push({ name, grade, units });
        updateTableAndGPA();
        
        // Reset inputs
        subjectNameInput.value = "";
        subjectGradeInput.value = "";
        subjectUnitsInput.value = "";
    }
});

clearBtn.addEventListener("click", clearAllData);
