
function solicitarNotas() {
    let notas = [];
    for (let i = 1; i <= 3; i++) {
      notas.push(parseFloat(prompt("Ingrese la nota ")));
    }
    return notas;
  }
  function media(notas) {
    let total = 0;
    for (let i = 0; i < notas.length; i++) {
      total += notas[i];
    }
    return total / notas.length;
  }
  function resul(media) {
    if (media < 5) {
      alert("SUSPENSO");
    } else if (media < 7) {
      alert("APROBADO");
    } else {
      alert("SOBRESALIENTE");
    }
  }
  let notas = solicitarNotas();
  let media = media(notas);
  resul(media);
