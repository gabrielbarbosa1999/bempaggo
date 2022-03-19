function mais(){
    //Selecionando o elemente(Input de quandtidade) atraves do ID
    var atual = document.getElementById("quantidade").value;
    //Realizando a soma
    var novo = parseInt(atual) + 1;
    //Adicionando o novo valor no Input
    document.getElementById("quantidade").value = novo;
}
  
function menos(){
    //Selecionando o elemente(Input de quandtidade) atraves do ID
    var atual = document.getElementById("quantidade").value;
    if(atual > 1) { //Verificamos se o valor atual e maior q 1, caso nao seja nao deixa zerar!
        //Realizando a subtracao
        var novo = atual - 1;
        //Adicionando o novo valor no Input
        document.getElementById("quantidade").value = novo;
    }
}