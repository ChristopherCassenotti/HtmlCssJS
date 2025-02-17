let btn_add = document.getElementById('add');
let input_text = document.getElementById("input_text");
let main = document.getElementById('tarefas');
let check_Tarefa = document.getElementById('check_tarefa');
let contador = 0;
let deletar = document.getElementById('delete');

// add a tarefa escrita no input em uma box na tela
function add_Tarefa(){
    let tarefa = input_text.value;
    // verificar se a tarefa tem um conteudo
    if((tarefa !== "") && (tarefa !== undefined) && (tarefa !== null)){
        
        ++contador;
    // add uma nova tarefa com o id e tarefa escrita no input
        let new_item = `
    <div class="tarefa" id="${contador}">
        <i id="icone_${contador}" onclick="tarefa_Realizada(${contador})" class="mdi mdi-circle-outline"></i>
        <span> ${tarefa} </span>
        <button id="delete" class="delete" onclick="excluir(${contador})" >Delete</button>
    </div>
    `;
        main.innerHTML += new_item;
    }
    else{
        alert("Digite algo para adcionar uma tarefa!")
    }
}

// deletar a tarefa
function excluir(id){
    var tarefa_Delete = document.getElementById(id);
    tarefa_Delete.remove();
}

function tarefa_Realizada(id){
    
    var item = document.getElementById(id);
    item_classe = item.getAttribute('class')
    classe = "tarefa";
    var icone = document.getElementById('icone_' + id)
    
    // verificar se a classe do item é igual tarefa
    if(item_classe == classe) {
        var item = document.getElementById(id);
        // trocar a box
        item.classList.remove('tarefa');
        item.classList.add('tarefa_check');
        // trocar icon
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");
    }
    else{
        var item = document.getElementById(id);
        // trocar a box
        item.classList.remove('tarefa_check');
        item.classList.add('tarefa');
        // trocar icon
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }

}
