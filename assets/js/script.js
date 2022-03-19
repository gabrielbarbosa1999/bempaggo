function mais(){
    //Selecionando o elemente(Input de quandtidade) atraves do ID
    let atual = document.getElementById("quantidade").value;
    //Realizando a soma
    let novo = parseInt(atual) + 1;
    //Adicionando o novo valor no Input
    document.getElementById("quantidade").value = novo;
}
  
function menos(){
    //Selecionando o elemente(Input de quandtidade) atraves do ID
    let atual = document.getElementById("quantidade").value;
    if(atual > 1) { //Verificamos se o valor atual e maior q 1, caso nao seja nao deixa zerar!
        //Realizando a subtracao
        let novo = atual - 1;
        //Adicionando o novo valor no Input
        document.getElementById("quantidade").value = novo;
    }
}