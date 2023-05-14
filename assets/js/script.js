function mostrarHorario() {
    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    let diaSemana = data.toLocaleString('pt-BR',{weekday:"long"});
    let dia = data.getDate();
    let mes = data.toLocaleString('pt-BR',{month:"long"} );
    let ano = data.getFullYear();

    
    // Adiciona um zero à frente do número, caso ele seja menor que 10
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
  
    let horasFormatadas = `${horas}:${minutos}:${segundos}`;
    let dataFormada =`${diaSemana},${dia} de ${mes} de ${ano}`
  
    // Atualiza o conteúdo dos elementos HTML com as horas formatadas
    document.getElementById("horas").innerHTML = horasFormatadas;
    document.getElementById("data").innerHTML = dataFormada;
  }
  
  // Atualiza as horas a cada segundo
  setInterval(mostrarHorario, 1000);
  