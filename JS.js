function multiply() {
    myResult.innerText = inp1.value * inp2.value;
}

// Parameterized functions

function display(z) {
    result.innerText += z;
}
function calculateA() {
    let z = result.innerText;
    result.innerText = eval(z);
}
function clearA() {
    result.innerText = "";
}
function deleteLast() {
     result.innerText=result.innerText.slice(0, -1);
}

// Calculator Java Script NON-PARAMETERIZED FUNCTIONS
//  function display1() {
//      result.innerText += '1';
//  }
//  function display2() {
//      result.innerText += '2';
// }
// function display3() {
//      result.innerText += '3';
// }
// function display4() {
//      result.innerText += '4';
// }
// function display5() {
//      result.innerText += '5';
// }
// function display6() {
//      result.innerText += '6';
// }
// function display7() {
//     result.innerText += '7';
// }
// function display8() {
//      result.innerText += '8';
// }
// function display9() {
//      result.innerText += '9';
// }
// function display0() {
//      result.innerText += '0';
// }
// function displayDot() {
//      result.innerText += '.';
// }
// function displayA() {
//      result.innerText += '+';
// }
// function displayS() {
//      result.innerText += '-';
// }
// function displayD() {
//      result.innerText += '/';
// }
// function displayM() {
//      result.innerText += '*';
// }
// function calculateA() {
//     let z = result.innerText;
//     result.innerText = eval(z);
// }
// function clearA() {
//      result.innerText = '';
// }

function switchBulb() {
     if (btn3.innerText=="on") {
               displayBulb.src ="onbulb.jpg";
               btn3.innerText="off";
            } else {
               displayBulb.src="offbulb.jpg";
               btn3.innerText="on";
            }  
} 


function compareUserName() {
     let inp1 = input1.value;
     let inp2 = input2.value;
     if (inp1==inp2)
     {
          userNameResult.innerText = "Welcome " + inp1;
          input1.value = "";
          input2.value = "";
     }
     else
     {
          userNameResult.innerText = "Names does not match";
          input1.value = "";
          input2.value = "";
     }
}
function grading() {
     let studentScore = scores.value;
     if (studentScore<0 || studentScore>100) {
          results.innerText = "Invalid";     
     } else if (studentScore <= 39) {
          results.innerText = "Fail";
     }else if (studentScore <= 49) {
          results.innerText = "Pass";
     }else if (studentScore <= 69) {
          results.innerText = "Credit";
     }
     else {
          results.innerText = "Excellent";
     }
}
   