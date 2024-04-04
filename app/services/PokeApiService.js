import { AppState } from "../AppState.js"
import { pokeApi } from "./AxiosService.js"
import { Pokemon } from "../models/Pokemon.js"

class PokemonApiService {



  async getPokemonApi() {
    const response = await pokeApi.get()
    console.log('Pokemon', response.data)
    AppState.pokemonApi = response.data.results
  }

  async getPokemonByName(pokemonName) {
    const response = await pokeApi.get(`${pokemonName}`)
    console.log('pokemon', response.data)
    const pokemon = new Pokemon(response.data)
    AppState.activePokemon = pokemon
  }





}

export const pokemonApiService = new PokemonApiService