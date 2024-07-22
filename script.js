function generateTable() {
    var tableSizeInput = document.getElementById('tableSize');
    var tableSize = parseInt(tableSizeInput.value);
    if (isNaN(tableSize) || tableSize < 1 || tableSize > 10) {
        alert('Please enter a number between 1 and 10.');
        return;
    }
    var tableHTML = '<table>';
    tableHTML += '<tr><th>Number</th></tr>';
    for (var i = 1; i <= 10; i++) {
        tableHTML += "<tr><td>".concat(tableSize, " * ").concat(i, " = ").concat(tableSize * i, "</td></tr>");
    }
    tableHTML += '</table>';
    var tableContainer = document.getElementById('tableContainer');
    if (tableContainer) {
        tableContainer.innerHTML = tableHTML;
    }
}
