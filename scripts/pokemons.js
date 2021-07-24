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

pokemons.forEach(function(element){
    sessionStorage.setItem(`${element.nome}`, JSON.stringify(element));
})

sessionStorage.setItem("pokemons", JSON.stringify(pokemons))