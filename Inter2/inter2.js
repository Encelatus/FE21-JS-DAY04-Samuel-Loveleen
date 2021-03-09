

const randomBgColor = () => {
    
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    // var bgColor = `rgb(${x},${y},${z})`;
    console.log(bgColor)
    document.body.style.background = bgColor;
}
var butt = document.getElementById("button");
butt.addEventListener("click", randomBgColor);