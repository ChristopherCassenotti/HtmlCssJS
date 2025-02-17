//contador
let reset_btn = document.getElementById('reset');
let count = 0;

visor.innerHTML = count;

function add(){
    count = count + 1;
    visor.innerHTML = count;
}
function sub(){
    count = count - 1;
    visor.innerHTML = count;
}
function reset(){
    count = 0;
    visor.innerHTML = count;
}
//Fim do contador

//Botão de esconder e mostrar a div
let btn_show = document.getElementById('btn_show');
let clas_count = document.getElementById('contador');

btn_show.addEventListener('click', function(){
    if(clas_count.classList.contains("count-show")){
        clas_count.classList.add("count")
        clas_count.classList.remove("count-show")
    }
    else{
        clas_count.classList.remove("count")
        clas_count.classList.add("count-show")
    }
})
//Fim do botão de esconder e mostrar a div