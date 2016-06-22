var HTMLService = {
    
    displayAddedItem: function (item) {
        var tableRow = HTMLService.createTableRow(item);
        HTMLService.addToTable(tableRow);
        HTMLService.displayTotalEmployee(EmployeeController.calculateEmployeeTotal());
    },
    
    createTableRow: function (item) {
        var tableRow = document.createElement('tr');
        tableRow.appendChild(HTMLService.createTableData(item.name));
        tableRow.appendChild(HTMLService.createTableData(item.employee));
        return tableRow;
    },
    
    createTableData: function(text) {
        var tableData = document.createElement('td');
        tableData.innerHTML = text;
        return tableData;
    },
    
    addToTable : function (tableRowItem) {
        var documentTable = document.getElementById('employee');
        documentTable.appendChild(tableRowItem);        
    },
    
    displayTotalEmployeedisplayTotalEmployee: function (value) {
        var documentTableTotal = document.getElementById('employee-total');
        documentTableTotal.innerHTML = '';
        var item = {name: 'Total', sallary: value };
        var tableRow = HTMLService.createTableRow(item);
        documentTableTotal.appendChild(tableRow);
    }
}