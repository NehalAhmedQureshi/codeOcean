document.querySelector('.form').addEventListener("submit", (event) => {
     event.preventDefault()
     const printer = document.querySelector(".percent")
     const username =  document.querySelector(".username").value
     const rollNo = + document.querySelector(".rollNumner").value
     let english = + document.querySelector(".english").value
     let urdu = + document.querySelector(".urdu").value
     let islamiat = + document.querySelector(".islamiat").value
     let math = + document.querySelector(".math").value
     let grade = document.querySelector(".grade")

     english = english <= 100 ? english : "Enter Valid Number"
     urdu = urdu <= 100 ? urdu : "Enter Valid Number"
     islamiat = islamiat <= 100 ? islamiat : "Enter Valid Number"
     math = math <= 100 ? math : "Enter Valid Number"

     if(english > 30 ){
          document.querySelector(".engObt").style.color = 'darkgreen'
          document.querySelector(".engObt").style.backgroundColor = 'lightgreen'
          document.querySelector(".enRemarks").innerHTML = 'PASS'
     }else {
          document.querySelector(".engObt").style.color = 'red'
          document.querySelector(".engObt").style.backgroundColor = 'pink' 
          document.querySelector(".enRemarks").innerHTML = 'FAIL'
     }
     if(urdu > 30 ){
          document.querySelector(".urduObt").style.color = 'darkgreen'
          document.querySelector(".urduObt").style.backgroundColor = 'lightgreen'
          document.querySelector(".urRemarks").innerHTML = 'PASS'

     }else {
          document.querySelector(".urduObt").style.color = 'red'
          document.querySelector(".urduObt").style.backgroundColor = 'pink' 
          document.querySelector(".urRemarks").innerHTML = 'FAIL'
   
     }
     if(math > 30 ){
          document.querySelector(".mathObt").style.color = 'darkgreen'
          document.querySelector(".mathObt").style.backgroundColor = 'lightgreen'
          document.querySelector(".maRemarks").innerHTML = 'PASS'

     }else {
          document.querySelector(".mathObt").style.color = 'red'
          document.querySelector(".mathObt").style.backgroundColor = 'pink'
          document.querySelector(".maRemarks").innerHTML = 'FAIL'
    
     }
     if(islamiat > 30 ){
          document.querySelector(".islObt").style.color = 'darkgreen'
          document.querySelector(".islObt").style.backgroundColor = 'lightgreen'
          document.querySelector(".isRemarks").innerHTML = 'PASS'

     }else {
          document.querySelector(".islObt").style.color = 'red'
          document.querySelector(".islObt").style.backgroundColor = 'pink'  
          document.querySelector(".isRemarks").innerHTML = 'FAIL'
  
     }

     document.querySelector(".usernameP").innerHTML = `${username} (${rollNo})`
     document.querySelector(".engObt").innerHTML = english <= 100 ? english : 'Enter valid Number'
     document.querySelector(".urduObt").innerHTML = urdu <= 100 ? urdu : 'Enter valid Number'
     document.querySelector(".mathObt").innerHTML = math <= 100 ? math : 'Enter valid Number'
     document.querySelector(".islObt").innerHTML = islamiat <= 100 ? islamiat : 'Enter valid Number'

     if (english <= 100 && urdu <= 100 && islamiat <= 100 && math <= 100) {
          let obtMarks =+ english + urdu + math + islamiat
          document.querySelector(".obtainTotal").innerHTML = english + urdu + math + islamiat
          const percentage = (obtMarks/400)*100
          printer.innerHTML = `${percentage}%`
          if(english > 30 && urdu > 30 && math > 30 && islamiat > 30 ){
               if(percentage >= 90 ){
               grade.innerHTML = 'A<sup>+1</sup>'
          } else if ( percentage >= 80 ){
               grade.innerHTML = 'A<sup>+</sup>'
          }else if ( percentage >= 70 ){
               grade.innerHTML = 'A'
          }else if ( percentage >= 60 ){
               grade.innerHTML = 'B'
          }else if ( percentage >= 50 ){
               grade.innerHTML = 'C'
          }else if ( percentage >= 40 ){
               grade.innerHTML = 'D'
          }else if ( percentage >= 30 ){
               grade.innerHTML = 'E'
          }else if ( percentage < 30 ){
               grade.innerHTML = 'FAIL'
          }
     }else {
          grade.innerHTML = 'FAIL'
     }
     } else{
          document.querySelector(".obtainTotal").innerHTML = 'Enter vlaid Numbers'
     }
     // printer.innerHTML = `${((english+urdu+math+islamiat)/400)*100}%`

})