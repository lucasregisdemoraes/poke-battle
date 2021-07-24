// Pega o Pokemon do jogador e da máquina do sessionStorage
var pokemonJogador = JSON.parse(sessionStorage.pokemonEscolhido)
var pokemonMaquina = JSON.parse(sessionStorage.pokemonMaquina)

// Mostra vida dos Pokemons
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
