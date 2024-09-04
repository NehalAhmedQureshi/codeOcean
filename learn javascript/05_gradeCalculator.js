document.querySelector('.form').addEventListener("submit", (event) => {
     event.preventDefault()
     const printer = document.querySelector(".percent")
     const username =  document.querySelector(".username").value
     const rollNo = + document.querySelector(".rollNumner").value
     let english = + document.querySelector(".english").value
     let urdu = + document.querySelector(".urdu").value
     let islamiat = + document.querySelector(".islamiat").value
     let math = + document.querySelector(".math").value

     english = english <= 100 ? english : "Enter Valid Number"
     urdu = urdu <= 100 ? urdu : "Enter Valid Number"
     islamiat = islamiat <= 100 ? islamiat : "Enter Valid Number"
     math = math <= 100 ? math : "Enter Valid Number"

     if(english > 30 ){
          document.querySelector(".engObt").style.color = 'darkgreen'
          document.querySelector(".engObt").style.backgroundColor = 'lightgreen'
     }else {
          document.querySelector(".engObt").style.color = 'red'
          document.querySelector(".engObt").style.backgroundColor = 'pink'    
     }
     if(urdu > 30 ){
          document.querySelector(".urduObt").style.color = 'darkgreen'
          document.querySelector(".urduObt").style.backgroundColor = 'lightgreen'
     }else {
          document.querySelector(".urduObt").style.color = 'red'
          document.querySelector(".urduObt").style.backgroundColor = 'pink'    
     }
     if(math > 30 ){
          document.querySelector(".mathObt").style.color = 'darkgreen'
          document.querySelector(".mathObt").style.backgroundColor = 'lightgreen'
     }else {
          document.querySelector(".mathObt").style.color = 'red'
          document.querySelector(".mathObt").style.backgroundColor = 'pink'    
     }
     if(islamiat > 30 ){
          document.querySelector(".islObt").style.color = 'darkgreen'
          document.querySelector(".islObt").style.backgroundColor = 'lightgreen'
     }else {
          document.querySelector(".islObt").style.color = 'red'
          document.querySelector(".islObt").style.backgroundColor = 'pink'    
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
     } else{
          document.querySelector(".obtainTotal").innerHTML = 'Enter vlaid Numbers'
     }
     // printer.innerHTML = `${((english+urdu+math+islamiat)/400)*100}%`

})