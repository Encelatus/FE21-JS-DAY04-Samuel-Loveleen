
var btns = document.getElementsByClassName("btn");

console.log(btns)
// function printValue() {

// }

for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function(){
            printValue(i)
        })
    }


function printValue(i) {
    var firstName = document.getElementById("fname").value;

    var lastName = document.getElementById("lname").value;

    var age = document.getElementById("age").value;

    document.getElementById("output1").innerHTML = firstName;
    document.getElementById("output2").innerHTML = lastName;
    document.getElementById("output3").innerHTML = age;

}

// document.getElementsByClassName("btns").addEventListener("click", printValue);



