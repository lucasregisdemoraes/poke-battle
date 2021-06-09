// Pokemons
var bulbasaur = {
    nome: "Bulbasaur",
    vida: {
       vidaTotal: 200,
       vidaAtual: 200, 
    },
    tipo: "planta",
    ataque: 92,
    defesa: 92,
    spAtaque: 121,
    spDefesa: 121,
}
var charmander = {
    nome: "Charmander",
    vida: {
        vidaTotal: 188,
        vidaAtual: 188, 
    },
    tipo: "fogo",
    ataque: 98,
    defesa: 81,
    spAtaque: 112,
    spDefesa: 94,
}
var squirtle = {
    nome: "Squirtle",
    vida: {
        vidaTotal: 198,
        vidaAtual: 198, 
    },
    tipo: "agua",
    ataque: 90,
    defesa: 121,
    spAtaque: 94,
    spDefesa: 119,
}
var treecko = {
    nome: "Treecko",
    vida: {
        vidaTotal: 198,
        vidaAtual: 198, 
    },
    tipo: "planta",
    ataque: 90,
    defesa: 121,
    spAtaque: 94,
    spDefesa: 119,
}
var torchic = {
    nome: "Torchic",
    vida: {
        vidaTotal: 198,
        vidaAtual: 198, 
    },
    tipo: "fogo",
    ataque: 90,
    defesa: 121,
    spAtaque: 94,
    spDefesa: 119,
}
var mudkip = {
    nome: "Mudkip",
    vida: {
        vidaTotal: 198,
        vidaAtual: 198, 
    },
    tipo: "agua",
    ataque: 90,
    defesa: 121,
    spAtaque: 94,
    spDefesa: 119,
}
var chikorita = {
    nome: "Chikorita",
    vida: {
        vidaTotal: 198,
        vidaAtual: 198, 
    },
    tipo: "planta",
    ataque: 90,
    defesa: 121,
    spAtaque: 94,
    spDefesa: 119,
}
const pokemons = [bulbasaur, charmander, squirtle, treecko, torchic, mudkip, chikorita]

// Mostra cartas dos Pokemons
pokemons.forEach(mostraPokemon)

function mostraPokemon(element) {
    let main = document.querySelector("main")

    let card = document.createElement("div")
    card.classList = "card"

    if(element.tipo == "planta") {
        card.style.backgroundColor = "rgb(155, 255, 155)"
    } else if(element.tipo == "fogo") {
        card.style.backgroundColor = "rgb(255, 155, 155)"
    } else {
        card.style.backgroundColor = "rgb(155, 205, 255)"
    }


    card.id = element.nome

    let imagemPokemon = document.createElement("img")

    let nomePokemon = document.createElement("span")
    nomePokemon.innerText = element.nome

    let vidaPokemon = document.createElement("span")
    vidaPokemon.innerText = `Vida: ${element.vida.vidaTotal}`

    let ataquePokemon = document.createElement("span")
    ataquePokemon.innerText = `Ataque: ${element.ataque}`

    let defesaPokemon = document.createElement("span")
    defesaPokemon.innerText = `Defesa: ${element.defesa}`

    let spAtaquePokemon = document.createElement("span")
    spAtaquePokemon.innerText = `Ataque Especial: ${element.spAtaque}`

    let spDefesaPokemon = document.createElement("span")
    spDefesaPokemon.innerText = `Defesa Especial: ${element.spDefesa}`

    card.appendChild(imagemPokemon)
    card.appendChild(nomePokemon)
    card.appendChild(vidaPokemon)
    card.appendChild(ataquePokemon)
    card.appendChild(defesaPokemon)
    card.appendChild(spAtaquePokemon)
    card.appendChild(spDefesaPokemon)

    main.appendChild(card)
}

// Vê o Pokemon selecionado
pokemons.forEach(function(element){
    let elemento = `#${element.nome}`
    let elementos = main.querySelector(elemento)
    elementos.addEventListener("click", function(){
        let mensagem = document.getElementById("mensagem")
        mensagem.style.display = "block"
        let mensagemSpan = document.getElementById("mensagemSpan")
        mensagemSpan.innerText = `Você escolheu ${element.nome}`
    })
})



// Como tirar uma variavel de dentro de uma função???


// Sorteia Pokemon da máquina
var pokemonMaquina = escolhePokemonMaquina() 
function escolhePokemonMaquina() {
    var numeroPokemon = parseInt(Math.random() * pokemons.length)
    var pokemonMaquina = pokemons[numeroPokemon]
    return pokemonMaquina
}



