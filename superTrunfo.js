var carta1 = {	
	nome: "Bulbasauro",
	atributos: {
		ataque: 7,
		defesa: 8,
		magia: 6
	}	
};

var carta2 = {
	nome: "Charmander",
	atributos: {
		ataque: 9,
		defesa: 8,
		magia: 2
	}	
};

var carta3 = {
	nome: "Squirtle",
	atributos: {
		ataque: 5,
		defesa: 9,
		magia: 10
	}	
};


var baralho = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {

var numeroCartaMaquina = parseInt(Math.random() * 3);
cartaMaquina = baralho[numeroCartaMaquina];

var numeroCartaJogador = parseInt(Math.random() * 3);
while (numeroCartaMaquina == numeroCartaJogador) {

numeroCartaJogador = parseInt(Math.random() * 3);
}

cartaJogador = baralho[numeroCartaJogador];
console.log(cartaJogador);

document.getElementById("btnSortear").disabled = true;

document.getElementById("btnJogar").disabled = false;

exibirOpcoes();
}

function exibirOpcoes() {

	var opcoes = document.getElementById("opcoes");
	var opcoesTexto = "";

	for (var atributo in cartaJogador.atributos){
		opcoesTexto += 
		"<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;

	}

	opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {

	var radiosAtributos = document.getElementsByName("atributo");

	for (var i = 0; i < radiosAtributos.length; i++) {

		if (radiosAtributos[i].checked == true) {

			return radiosAtributos[i].value;
		}
	}

}

function jogar() {

	var atributoSelecionado = obtemAtributoSelecionado();
	var elementoResultado = document.getElementById("resultado")
	var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
	var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
	
	if(valorCartaJogador > valorCartaMaquina) {

		elementoResultado.innerHTML = "Você venceu essa batalha 😎 "

	} else if (valorCartaMaquina > valorCartaJogador) {

		elementoResultado.innerHTML = "Você perdeu essa batalha 😰 "

	} else {

		elementoResultado.innerHTML = "Houve empate 🤷‍♀️"
	}

	console.log(cartaMaquina);

}