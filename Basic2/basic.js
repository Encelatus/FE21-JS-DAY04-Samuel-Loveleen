//Basic 1

var btns = document.getElementsByClassName("btn");

console.log(btns)



function printValue() {
    let firstName = document.getElementById("fname").value;

    let lastName = document.getElementById("lname").value;

    let age = document.getElementById("age").value;

    document.getElementById("output1").innerHTML = `${firstName} <p>${lastName} <p>${age}`;

    //.length counts the characters in a string which in our case is the value of "firstName".
    let str = firstName;
    let n = str.length;
    // document.getElementById("output2").innerHTML = n; 


    if (str.length > 5) {
        document.getElementById("output1").style.color = "green";
    } else {
        document.getElementById("output1").style.color = "red";
    }

}

document.getElementsByClassName("btn")[0].addEventListener("click", printValue);


// for (let i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function(){
//             printValue(i)
//         })
//     }
// Did the loop because we made more buttons...

//Basic 1+2



function selectProfession() {

    var select = document.getElementById("professions").value;

    document.getElementById("output2").innerHTML = select;
    // var select = document.getElementById("professions").value;
    //var hosp = document.getElementById("hospital").value;
    //var edu = document.getElementById("education").value;

    if (select == "it") {
        document.getElementById("output1").style.backgroundColor = "purple";


    } else if (select == "hospital") {

        document.getElementById("output1").style.backgroundColor = "yellow";


    } else {

        document.getElementById("output1").style.backgroundColor = "lightblue";

    }



}

document.getElementsByClassName("btn")[0].addEventListener("click", selectProfession);