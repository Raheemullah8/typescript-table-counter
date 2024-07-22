function generateTable() {
    
    const tableSizeInput = document.getElementById('tableSize') as HTMLInputElement;
    const tableSize = parseInt(tableSizeInput.value);
    
    if (isNaN(tableSize) || tableSize < 1 || tableSize > 10) {
        alert('Please enter a number between 1 and 10.');
        return;
    }

    let tableHTML = '<table>';
    tableHTML += '<tr><th>Number</th></tr>';

    for (let i = 1; i <= 10; i++) {
        tableHTML += `<tr><td>${tableSize} * ${i} = ${tableSize * i}</td></tr>`;
    }

    tableHTML += '</table>';

    const tableContainer = document.getElementById('tableContainer');
    if (tableContainer) {
        tableContainer.innerHTML = tableHTML;
    }
}
