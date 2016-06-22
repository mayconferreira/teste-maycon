var EmployeeController = {
    
    init: function(){
        EmployeeController.setForm();
        EmployeeController.displayItens();
        EmployeeController.displayTotalValueItens();
    },
    
    setForm : function() {
        var form = document.getElementById('employeeForm');
        form.addEventListener('submit', CartController.eventSubmit);
    },
    
    eventSubmit: function (event){
        event.preventDefault();
        var inputName = document.getElementById('employeeName');
        var inputSallary = document.getElementById('employeeSallary');
        
        var item = {};
        item.name = inputName.value;
        item.sallary = parseFloat(inputSallary.value).toFixed(2);
        
        inputName.value = '';
        inputSallary.value = '';
        
        EmployeeController.addItem(item);
    },
    
    addItem: function (item){
        EmployeeService.addEmployeeItens(item);
        HTMLService.displayAddedItem(item);
    },
    
    displayItens: function() {
        var itens = EmployeeService.getEmployeeItens();
        itens.forEach(HTMLService.displayAddedItem);
    },
    
    displayTotalValueItens: function(){
        var total = EmployeeController.calculateEmployeeTotal();
        HTMLService.displayTotalCart(total);
    },
    
    calculateEmployeeTotal: function() {
        var itens = CartService.getEmployeeItens();
        var total = 0;
        itens.forEach(function (item){
            total += parseFloat(item.Sallary);
        });
        return total.toFixed(2);
    }
    
}

EmployeeController.init();