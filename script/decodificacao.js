document.getElementById("caixaTexto").addEventListener("focus", function() {
    this.value = "";
});

function cripitografar(){
    var conteudo = document.getElementById("caixaTexto").value;
    var newword = " "
    var mensagemErroDiv = document.getElementById("retangulo-branco__erro"); 
    var mensagemCorreta= document.getElementById("retangulo-branco__mensagem"); 
    if (conteudo == "Digite seu texto" | conteudo == ""){
        mensagemErroDiv.style.display = "flex";
        mensagemCorreta.style.display = "none";
    }
    else{
        mensagemErroDiv.style.display = "none";
        mensagemCorreta.style.display = "flex";
        for (let letra of conteudo){
            if(letra == "a"){
                newword += "ai";
            }else if(letra == "e"){
                newword += "enter";
            }else if(letra == "i"){
                newword += "imes";
            }else if(letra == "o"){
                newword += "ober";
            }else if(letra == "u"){
                newword += "ufat";
            }else{
                newword += letra;
            }
        }

        document.getElementById('retangulo-branco__mensagem').textContent = newword;

    }
}

function descripitografar(){
    var conteudo = document.getElementById("caixaTexto").value;
    var newword = " "
    var mensagemErroDiv = document.getElementById("retangulo-branco__erro"); 
    var mensagemCorreta= document.getElementById("retangulo-branco__mensagem"); 
    if (conteudo == "Digite seu texto" | conteudo == ""){
        mensagemErroDiv.style.display = "flex";
        mensagemCorreta.style.display = "none";
    }
    else{
        mensagemErroDiv.style.display = "none";
        mensagemCorreta.style.display = "flex";
        newword = conteudo.replace(/ai/g, "a");
        newword = newword.replace(/enter/g, "e");
        newword = newword.replace(/imes/g, "i");
        newword = newword.replace(/ober/g, "o");
        newword = newword.replace(/ufat/g, "u");

        
        document.getElementById('retangulo-branco__mensagem').textContent = newword;
    }
}


document.getElementById("cripitografar").addEventListener("click", cripitografar);
document.getElementById("descriptografar").addEventListener("click", descripitografar);
