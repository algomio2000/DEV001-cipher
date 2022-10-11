const cipher = {

    encode: function(texto, correr) {
      //array de letras
      let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      //reultado para cambiar mas adelante
      let resultado = "";
      //operacion matematica 
      correr = (correr % 26 + 26) % 26;
      //condicional donde i representa la posicion del primer elemento del array y lengh nos da lo largo del mensaje, y cada vez se añade 1
      if (texto) {
        //inicia en 0, que la i es menor que la logitud del texto, se actualiza agragndo 1
        for (let i = 0; i < texto.length; i++) {
    
          //n
          if (letras.indexOf(texto[i]) != -1) {
            //Pasamos el array por indexof para que nos retorne la primera poscion del texto le sumamos  el valor de correr
            //y le aplicamos el modulo para asegurarnos que si excede los 26 devuelva un numero dentro de los valores.
            let posicion = ((letras.indexOf(texto[i]) + correr) % 26);
            resultado = resultado + letras[posicion];
          }
          else {
            resultado += texto[i];
          }
        }
      }
      return resultado;
    },
    
    decode: function(texto, correr) {
      let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let resultado = "";
      correr = (correr % 26 - 26) % 26;
      if (texto) {
        for (i = 0; i < texto.length; i++) {
          if (letras.indexOf(texto[i]) != -1) {
            let posicion = ((letras.indexOf(texto[i]) - correr) % 26);
            resultado += letras[posicion];
          }
          else
            resultado = resultado + letras[posicion];
        }
      }
      return resultado;
    }
};
// encode(correr,texto)

export default cipher;

