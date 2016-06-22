var EmployeetService = {
    cartItens : [],
    
    getEmployeeItens: function () {
        EmployeeService.loadEmployeeItens();
        return EmployeeService.employeeItens;
    },
     
     addEmployeeItens: function (item) {
         EmployeeService.EmployeeItens.push(item);
         console.log();
         EmployeeService.saveEmployeeItens();
     },
     
     saveEmployeeItens: function () {
         var EmployeeJSON = JSON.stringify(EmployeeService.employeeItens);
         window.localStorage.setItem('employeeItens', JSON.stringify(EmployeeJSON));
     },
     
     loadCartItens: function () {
         var storageItens = window.localStorage.getItem('employeeItens');
         if(storageItens){
             EmployeetService.employeeItens = JSON.parse(JSON.parse(storageItens));
         }
     }
     
}