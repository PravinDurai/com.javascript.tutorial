//Functions, Looping

//Defining a simple function
function greeting(name){
  console.log("Welcome ", name);
}

//Looping
const employeeInfo=[{
  idArr:"1540", 
  nameArr:"Pravin Durai", 
  employeeCompanyArr:"Sandhata Technologies", 
  projectArr:"DXL", 
  expArr:8
  },{
  idArr:"1541", 
  nameArr:"Navin Durai", 
  employeeCompanyArr:"Google", 
  projectArr:"The Eye", 
  expArr:4
  }]

for(emp of employeeInfo){
  greeting(emp.nameArr);
  console.log(emp);
}

//Passing function as value to another function
//In the below example we are passing an annomous function compareEmployee as a value to another function
//Criteria : 
//1. The anonomous function name (in this case compareEmployee) should be same
//2. While passing as value we should pass rounded brackets in function argument
//3. Function should be invoked within the method where it's passed as value
//4. Custom function can be passed with/without arguments
function compareEmployee(compareEmployeeFn){
  compareEmployeeFn(employeeInfo[0], employeeInfo[1]);
}

compareEmployee((employee1, employee2)=>{
  if(employee1.expArr>=employee2.expArr){
    console.log(employee1.nameArr, " has more experience...");
  }else{
    console.log(employee2.nameArr, " has more experience...");
  }
});