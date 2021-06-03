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
    spDesefa: 121,
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
    spDesefa: 94,
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
    spDesefa: 119,
}

const pokemons = [bulbasaur, charmander, squirtle]

// Sorteia Pokemon da máquina

function escolhePokemonMaquina() {
    var numeroPokemon = parseInt(Math.random() * pokemons.length)
    var pokemonMaquina = pokemons[numeroPokemon]
    return pokemonMaquina
}

var pokemonMaquina = escolhePokemonMaquina() 

// vê qual foi o pokemon escolhido pelo jogador



function escolheuBulbasaur() {
    pokemon = pokemons[0]
    console.log(pokemon)
}




