// Pokemons
var bulbasaur = {
    nome: "Bulbasaur",
    vida: {
       vidaTotal: 200,
       vidaAtual: 200, 
    },
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
    ataque: 90,
    defesa: 121,
    spAtaque: 94,
    spDefesa: 119,
}

const pokemons = [bulbasaur, charmander, squirtle]

// Sorteia Pokemon da máquina
var pokemonMaquina = escolhePokemonMaquina() 
function escolhePokemonMaquina() {
    var numeroPokemon = parseInt(Math.random() * pokemons.length)
    var pokemonMaquina = pokemons[numeroPokemon]
    return pokemonMaquina
}


// vê qual foi o pokemon escolhido pelo jogador


pokemons.forEach(mostraPokemon)
function mostraPokemon(element) {
    let main = document.querySelector("main")

    let card = document.createElement("div")
    card.classList = "card"

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


    var pokemonSelecionado = document.querySelector(`#${element.nome}`);
    pokemonSelecionado.addEventListener("click", pokemonEscolhido())

    // console.log(pokemonEscolhido)
    function pokemonEscolhido() {
        // let abc = this.element

        console.log(this)
        // let pokemonEscolhido = element.nome

        // return pokemonEscolhido
    }

}


// console.log(pokemonEscolhido)
// let pokemonJogador = pokemonEscolhido()

// let card = document.getElementsByClassName('card')
// card.addEventListener("click", pokemonEscolhido, true)
// 
// console.log(card)


// function pokemonEscolhido() {
    // console.log(this)
// }






// console.log(pokemonJogador)

