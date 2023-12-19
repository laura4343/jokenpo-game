const jogadas = ["pedra", "papel", "tesoura"];
let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;
let vitoria = true;

function jogadaAlatoria() {
  const numeroDecimal = Math.random();
  const numeroAte3 = numeroDecimal * 3;
  const numeroFinal = Math.floor(numeroAte3);
  return numeroFinal;
}

function jogar(jogadaUsuario) {
  const jogadaComputador = jogadas[jogadaAlatoria()];

  if (jogadaComputador === jogadaUsuario) return alert("Empate!");
  else if (jogadaComputador === "pedra") {
    if (jogadaUsuario === "papel") {
      pontuacaoUsuario++;

      vitoria = true; // usuário ganhou: vitória = true
    } else if (jogadaUsuario === "tesoura") {
      pontuacaoComputador++;

      vitoria = false; // usuário perdeu: vitória = false
    }
  } else if (jogadaComputador === "papel") {
    if (jogadaUsuario === "tesoura") {
      pontuacaoUsuario++;

      vitoria = true; // usuário ganhou: vitória = true
    } else if (jogadaUsuario === "pedra") {
      pontuacaoComputador++;

      vitoria = false; // usuário perdeu: vitória = false
    }
  } else {
    if (jogadaUsuario === "pedra") {
      pontuacaoUsuario++;

      vitoria = true; // usuário ganhou: vitória = true
    } else if (jogadaUsuario === "papel") {
      pontuacaoComputador++;

      vitoria = false; // usuário perdeu: vitória = false
    }
  }

  const resultado = vitoria ? "Você ganhou!" : "Você perdeu!";

  document.querySelector("#voce").innerText = pontuacaoUsuario;
  document.querySelector("#computador").innerText = pontuacaoComputador;

  console.log(pontuacaoComputador);
  console.log(pontuacaoUsuario);
  alert(resultado);
}
