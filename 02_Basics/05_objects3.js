const course = {
    courseName : "Js in Hindi",
    price : 999,
    courseInstructor : "Amar"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor); //Amar

const {courseInstructor : abc} = course
console.log(abc);//Amar

//{
//    "name" : "Amar",
//    "courseName" : "Js in Hindi"
//    "price" :"free" 
//}

[
    {},
    {},
    {}
]