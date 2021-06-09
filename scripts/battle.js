// Pokemons
var bulbasaur = {
    nome: "Bulbasaur",
    vida: {
        vidaTotal: 200,
        vidaAtual: 200,
    },
    tipo: "planta",
    atks: {
        atk1: {
            nome: "ataque1",
            dano: -11,
        },
        atk2: {
            nome: "ataque1",
            dano: -11,
        },
        atk3: {
            nome: "ataque1",
            dano: -11,
        },
        atk4: {
            nome: "ataque1",
            dano: -11,
        },
        ataques: ["atk1", "atk2", "atk3", "atk4"],
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

const pokemons = [bulbasaur, charmander, squirtle]

// Sorteia Pokemon da máquina
var pokemonMaquina = escolhePokemonMaquina()
function escolhePokemonMaquina() {
    var numeroPokemon = parseInt(Math.random() * pokemons.length)
    var pokemonMaquina = pokemons[numeroPokemon]
    return pokemonMaquina
}






// Coloca Pokemon da Máquina na batalha
let pokemonJogador = bulbasaur

vidaPokemon(pokemonMaquina, "Maquina")
vidaPokemon(pokemonJogador, "Jogador")

function vidaPokemon(pokemon, deQuem) {
    let quantidadeBarraVida = document.getElementById(`quantidadeBarraVida${deQuem}`)
    let vidaTotal = pokemon.vida.vidaTotal
    let vidaAtual = pokemon.vida.vidaAtual
    let textoVida = document.getElementById(`textoVida${deQuem}`)
    textoVida.innerText = `${vidaAtual} / ${vidaTotal}`
    quantidadeBarraVida.style.width = tamanhoVida()

    function tamanhoVida() {
        let porcentagem
        if (vidaAtual == vidaTotal) {
            porcentagem = 90
        } else if (vidaAtual < vidaTotal) {
            porcentagem = 50
        }


        return `${porcentagem}%`
    }
}

// Vê ataques
// mostraAtaquesJogador()

// function mostraAtaquesJogador() {
//     for(let i >= 0, i = pokemonJogador.atks.ataques.length, i++)
//         console.log(1)
// }




