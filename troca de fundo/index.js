const colors = ["red", "green", "blue", "yellow"]

const color = document.getElementById("Color").innerHTML;


function trade_Color(){
    const randomNumber = getRamdomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    Color.innerHTML = colors[randomNumber];
}

function getRamdomNumber(){
    return Math.floor(Math.random()*colors.length);
}