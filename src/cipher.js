
const cipher = {


  encode: function(correr,texto){ 
    if(correr === undefined || texto === undefined) {
      throw new TypeError ("te falto escribir la clave")

    }else if (correr=== 0 || texto === typeof 0){
      throw new TypeError ("Solo puedes escribir letras mayusculas")}
     
     else if (correr === null || texto === null){
      throw new  TypeError("Ingresa un codigo valido")
     }
    
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

        else if (correr === null || texto === null){
          throw new  TypeError("Ingresa un codigo valido")
         }
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
     
    }; 
export default cipher;



//<p><button id="botonCifrar">Esconde mi secreto</button>
            //<button id="botonDescifrar">Muéstrame mi secreto</button></p>

