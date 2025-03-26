// Structures JSON API de-structure 

const course = {
    coursename: "js in hindi",
    price :"99" ,
    courseInstructor:"hiteshh"
}

console.log(course.courseInstructor);

const {courseInstructor} = course;  //value extract
console.log(courseInstructor);

const {courseInstructor : Ins} = course;  //value extract with short name 
console.log(Ins); //destructure

// const nav = (company) => {

// }

// nav(company="codeguru");  

//API

// {
//     name : "ria";
//     coursename:"youtube coding";
//     price :"free"
// }

[
    {},
    {},
    {},
]