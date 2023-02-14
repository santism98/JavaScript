function contarNumeros() {
    let numeros = [];
    let positivos = 0;
    let negativos = 0;
    let pares = 0;
  
    for (let i = 0; i < 10; i++) {
        //validar antes el numero con una funcion externa
        //comprobar que haya 10 numeros con un .length
      let num = Number(prompt("Introduce un número:"));
      numeros.push(num);
  //dowhile dentro de un for
      if (num > 0) {
        positivos++;
      } else if (num < 0) {
        negativos++;
      }
  
      if (num % 2 === 0) {
        pares++;
      }
    }
  
    console.log("Hay " + positivos + " números positivos.");
    console.log("Hay " + negativos + " números negativos.");
    console.log("Hay " + pares + " números pares.");
  }

  function ejercicio2() {
    let numeros = [];
    let numeros1a250 = [];
    let numeros251a500 = [];
  
    for (let i = 0; i < 10; i++) {
      let num = Number(prompt("Introduce un número entero entre 1 y 500:"));
  
      if (num >= 1 && num <= 500 && Number.isInteger(num)) {
        numeros.push(num);
  
        if (num <= 250) {
          numeros1a250.push(num);
        } else {
          numeros251a500.push(num);
        }
      } else {
        let j =0;
            while (j<3){
                j++;
            }
        console.log("El número introducido no es válido.");
        i--;
      }
    }
  
    console.log("Todos los números:", numeros);
    console.log("Números entre 1 y 250:", numeros1a250);
    console.log("Números entre 251 y 500:", numeros251a500);
  }
  