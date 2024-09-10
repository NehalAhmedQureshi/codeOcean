// // const h1 = document.getElementsByClassName('test')

// // console.log('inner html =>',h1[0].innerHTML)

// // const array = ['apple ' , 'banana', true , 10 , ['nehal ' , 'arsalan ', 'o']]
// const fruits = ['mango' , 'apple' , 'grapes' , 'banana']
// // console.log("🚀 ~ array:", array[4][2])

// //  *push array ke last m koi bhi value inject kara deta hy
// // fruits.push('avocarda')
// // console.log(fruits)
// // * pop array ke last value ko remove kr deta h
// // console.log('pop =>',fruits.pop())
// // console.log(fruits)
// // * unshift start m value ko add kara deta h
// // console.log('',fruits.unshift('bc'))
// // console.log(fruits)

// // * shift shuru se pehli value ko remove kr deta h
// // console.log('shift =>',fruits.shift())
// // console.log(fruits)

// const obj = {
//      name:'nehal',
//      rollNo : 3257,
//      activities : [],
//      0:432
// }
// obj.rollNo = 2132;
// // obj.name
// // console.log('new roll no => ' , obj)

// studentData = () => {

// }

const form = document.querySelector(".studentForm")

let students = []

form.addEventListener("submit" , (e) => {
     const studentName = document.querySelector('.studentName')
     const rollNo = document.querySelector('.rollNo')
     const teacherName = document.querySelector('.classTeacher')
     const batch = document.querySelector('#select') 

     const studentData = {
          name : studentName.value,
          rollno : rollNo.value,
          batch : batch.value,
          teacherName : teacherName.value,
     }
     students.push(studentData)
     // console.log("🚀 ~ form.addEventListener ~ studentData:", studentData)
     
});
console.log("🚀 ~ students:", students)