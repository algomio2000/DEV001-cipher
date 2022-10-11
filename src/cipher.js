const cipher = {


  encode: function(correr,texto){ 
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
      },
     
    } 
export default cipher;
