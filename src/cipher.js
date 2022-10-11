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
const cipher = {


  encode: function(correr,texto){ 
    if(correr === undefined || texto === undefined) {
      throw new TypeError ("te falto escribir la clave")

    }else if (correr=== 0 || texto === typeof 0){
      throw new TypeError ("Solo puedes escribir letras mayusculas")}
    
    var resultado = "";
     for(var i=0;i<texto.length;i++){
       var ascii= texto.charCodeAt(i);
       if(ascii>= 65 && ascii<=90){
       resultado += String.fromCharCode(((ascii-65+correr)%26)+65);
       
       }
          
       else {
        resultado+=texto.charAt(i);
         }
        }
       
    return resultado;
    },
   
    decode: function(correr,texto){ 
      if(correr=== undefined || texto === undefined) {
        throw new TypeError ("te falto escribir la clave")
  
      }else if (correr === 0 || texto === typeof 0){
        throw new TypeError ("Solo puedes escribir letras mayusculas")}
      var resultado = "";
       for(var i=0;i<texto.length;i++){
         var ascii= texto.charCodeAt(i);
         if(ascii>= 65 && ascii<=90){
         resultado += String.fromCharCode(((ascii-90-correr)%26)+90);
         
         }
            
         else {
          resultado+=texto.charAt(i);
           }
          }
         
      return resultado;
      }
     
    } 
//export default cipher;
