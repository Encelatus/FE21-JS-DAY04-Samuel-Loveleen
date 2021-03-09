


function addRemoveToGrid(){
    var santaC = document.getElementsByClassName("santa");

    for (let i = 0 ; i < santaC.length; i++){
        santaC[i].addEventListener("click",function(){
        
            this.style.opacity= "0";
        
            this.style.transition = "1s";
            setTimeout(()=>{this.opacity(0);},1000);
            });
    }
    
}

addRemoveToGrid();
// console.log("Test")
