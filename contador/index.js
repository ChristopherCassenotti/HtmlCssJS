document.getElementById("contagem").innerHTML = 0;

const updateValue = () => {
    document.getElementById("contagem").innerHTML = count;
}
let count=0;

function addNum(){
    if(count>=10)
        count= 10;
    else
    count += 1;
    updateValue()
}

function removeNum(){
    if(count<=0)
        count = 0;
    else
    count -= 1;
    updateValue();
}