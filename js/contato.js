function Enviar() {
    var nome = document.getElementById("nome")
    var email = document.getElementById("email")
    var datanasc = document.getElementById("datanasc")
    var comentario = document.getElementById("comentario")
    var ok

    if(nome.value != "" && nome.value.indexOf(" ")!= -1) {
        if(email.value.indexOf("@") != -1) {
            if(datanasc.value != ""){
                if(comentario.value != "") {
                    alert(nome.value+", Agradecemos o seu contato")
                     ok = true
                }
                else {
                    alert ("Digite  o seu comentário")
                    ok = false
                }  
            }
            else {
                alert ("Selecione a data de nascimento")
                ok = false
            }   
        }
        else {
            alert ("Digite um e-mail válido")
            ok = false
        }
    }
    else {
        alert("Preencha o seu nome completo")
        ok = false
    }
    return ok
}