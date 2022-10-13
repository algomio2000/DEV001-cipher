import cipher from './cipher.js';

//haciendo que lo que se escriba en mensaje 1 sea mayuscula
document.getElementById("mensaje1").addEventListener("keyup",function(){
    this.value = this.value.toUpperCase()
  });
  //los elementos nesesarios para la funcion encode
  document.getElementById("encode").addEventListener("click",function(){
    let texto = document.getElementById ("mensaje1").value;
    let correr = document.getElementById("correr").value;
    let numero = parseInt(correr);
    document.getElementById("mensaje2").value = cipher.encode(numero,texto);
  })
  //los elementos nesesarios para la funcion decode
  document.getElementById("decode").addEventListener("click",function(){
    let texto= document.getElementById ("mensaje1").value;
    let correr = document.getElementById ("correr").value;
    let numero = parseInt(correr);
    document.getElementById ("mensaje2").value = cipher.decode(numero,texto);
  })

  




