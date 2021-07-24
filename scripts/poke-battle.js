// Pega Pokemons do sessionStorage
var pokemons = JSON.parse(sessionStorage.pokemons)

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

// Função sortear Pokemon da máquina
function sorteiaPokemonMaquina() {
    var numeroPokemon = parseInt(Math.random() * pokemons.length)
    var pokemonMaquina = JSON.stringify(pokemons[numeroPokemon])
    // Coloca Pokemon da máquina no sessionStorage
    sessionStorage.setItem('pokemonMaquina', pokemonMaquina)
}

// Vê o Pokemon selecionado e sorteia Pokemon da máquina
pokemons.forEach(function(element){
    let elemento = `#${element.nome}`
    let elementos = main.querySelector(elemento)
    elementos.addEventListener("click", function(){
        let mensagem = document.getElementById("mensagem")
        mensagem.style.display = "block"
        let mensagemSpan = document.getElementById("mensagemSpan")
        mensagemSpan.innerText = `Você escolheu ${element.nome}`
        
        // Coloca Pokemon selecionado no sessionStorage
        sessionStorage.setItem('pokemonEscolhido', JSON.stringify(element))

        // Sorteia Pokemon da máquina
        sorteiaPokemonMaquina()
    })
})



