/*Create a university object that contains nested objects for departments, with each
department having a name and headOfDepartment. Log the head of one of the departments*/
let University = {
    departments:{
      physics:{
        name:"Pyhsics department",
        headOfDepartment:"Mr Kasozi Gerald"
      },
      Mathematics:{
        name:"Math department",
        headOfDepartment:"Mr Yiga Ronald"
      },
      English:{
        name:"English department",
        headOfDepartment:"Mr Lule John"
      }
    }
}

console.log(University["departments"]["English"].headOfDepartment)