
const primarySkill=["Java", "Spring-Boot", "Spring-Data-JPA", "Spring-Cloud", "Spring-Security", "MySQL", "MongoDB", "Kafka", "Docker", "Camunda", "Git"]

const secondarySkill=["Performance Testing", "Performance Engineering", "LoadRunner-VUGen", "NeoLoad", "LoadRunner-Controller", "LoadRunner-Analysis", "NewRelic", "Xymon", "Hyperic"]

console.log("Primary Skill :: ", primarySkill);

console.log("Secondary Skill :: ", secondarySkill);

const skillSet=[...primarySkill, ...secondarySkill];

console.log("Skill Set :: ", skillSet);

const skillSetNestedArray=[primarySkill, secondarySkill];

console.log("Skill Set Nested Array :: ", skillSetNestedArray);

const employeeInfo=["1540", "Pravin Durai", "Sandhata Technologies", "DXL", "8"];

console.log("Employee Info :: ", employeeInfo);

const [employeeId, employeeName, company, projectName, experience]=["1540", "Pravin Durai", "Sandhata Technologies", "DXL", "8"];

console.log("Employee ID :: ", employeeId);
console.log("Employee Name :: ", employeeName);
console.log("Employee Company :: ", company);
console.log("Project Name :: ", projectName);
console.log("Experience :: ", experience);

const {id, name, employeeCompany, project, exp}={
  id:"1540", 
  name:"Pravin Durai", 
  employeeCompany:"Sandhata Technologies", 
  project:"DXL", 
  exp:"8"
  };

console.log("Id :: ", id);
console.log("Name :: ", name);
console.log("Company :: ", employeeCompany);
console.log("Project :: ", project);
console.log("EXP :: ", exp);

const emp=[{
  idArr:"1540", 
  nameArr:"Pravin Durai", 
  employeeCompanyArr:"Sandhata Technologies", 
  projectArr:"DXL", 
  expArr:"8"
  },{
  idArr:"1541", 
  nameArr:"Navin Durai", 
  employeeCompanyArr:"Google", 
  projectArr:"The Eye", 
  expArr:"4"
  }];

console.log("Emp Id :: ", emp[1].idArr);
console.log("Name Arr :: ", emp[1].nameArr);
console.log("Company Arr :: ", emp[1].employeeCompanyArr);
console.log("Project Arr :: ", emp[1].projectArr);
console.log("EXP Arr :: ", emp[1].expArr);
