function validar(){
   let nome = myForm.username.value;
   let email = myForm.email.value;
   let fone = myForm.ffone.value;
   let fcpf = myForm.fcpf.value;
   let fpass = myForm.fpass.value;

   if (nome ==""){
        criaMensagem("Campo de nome Obrigatorio!");
   }

   if(email ==""){
    criaMensagem("Campo de Email Obrigatorio!");
   }
   if(fone ==""){
    criaMensagem("Campo de Telefone Obrigatorio!");
   }
   if(fcpf ==""){
    criaMensagem("Campo de CPF Obrigatorio!");
   }
   if(fpass ==""){
    criaMensagem("Campo de Senha Obrigatorio!");
   }
}

function criaMensagem(texto){
    var msg = document.createElement("div")
        msg.classList.add("small")
        msg.textContent= texto;

        var divMensagens = document.querySelector(".divMensagens");
        divMensagens.appendChild(msg);
        return false;
}
