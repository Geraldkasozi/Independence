/*Create an object school that has properties like name, location, studentsCount, and
establishedYear. Log the school’s name and location to the console.*/
const date = new Date()
let school ={
    name:"kabojja",
    location:"mukono",
    studentsCount:3000,
    establishedYear:1998,
    calculateSchoolAge: function(currentYear, startYear){
        return currentYear - startYear
    },
    schoolIntroduction: function(name, location, students){
         return `This is ${this.name} located in ${this.location} and it has ${this.students} students`
    }
}
let introduce = school.schoolIntroduction(school.name, school.location, school.studentsCount)

for(let key in school){
    console.log(`${key} : ${school[key]}`)
}

school["schoolType"] = "Primary"
school.studentsCount = 1000
let schoolAge = school.calculateSchoolAge(date.getFullYear(), school.establishedYear)

console.log("school_name:",school.name, "and school location:", school.location)
console.log(school.schoolType)
console.log(school.studentsCount)
console.log(schoolAge)
console.log(introduce)