const request = require('superagent')

const pokemonURL = 'https://pokeapi.co/api/v2/pokemon'

export function getPokemonById(id) {
  return request.get(`${pokemonURL}/${id}`).then((response) => response.body)
}
