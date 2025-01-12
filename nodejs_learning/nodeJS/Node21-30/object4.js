//De-structure object

const course={
courseName:"Java",
duration:"3 months",
price:1499
}
//console.log(course.courseName)
const {courseName}=course
console.log(` way 2 ${courseName}`);