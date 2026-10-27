document.getElementById('addBtn').addEventListener('click', function() {
    const name = document.getElementById('subjectName').value;
    const grade = parseFloat(document.getElementById('subjectGrade').value);
    const units = parseFloat(document.getElementById('subjectUnits').value);
    if (!name || isNaN(grade) || isNaN(units)) return;

    const tableBody = document.querySelector('#gradeTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = '<td>${name}</td><td>${grade}</td><td>${units}</td>';
    tableBody.appendChild(newRow);

    const rows = document.querySelectorAll('#gradeTable tbody tr');
    let totalPoints = 0, totalUnits = 0;
    rows.forEach(row => {
        totalPoints += parseFloat(row.cells[1].innerText) * parseFloat(row.cells[2].innerText);
        totalUnits += parseFloat(row.cells[2].innerText);
    });
    document.getElementById('gpaResult').innerText = totalUnits > 0 ? (totalPoints / totalUnits).toFixed(2) : '0.00';
});
