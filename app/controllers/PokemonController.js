import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokemonApiService } from "../services/PokeApiService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


export class PokemonsController {
  constructor() {
    console.log('GETTING')

    this.getPokemonApi()
    AppState.on('pokemonApi', this.drawPokemonList)
    AppState.on('activePokemon', this.drawActivePokemon)
  }



  async getPokemonApi() {
    try {
      await pokemonApiService.getPokemonApi()
    } catch (error) {
      console.error(error)
      Pop.toast("Couldn't get Pokemon", error)
    }
  }

  drawPokemonList() {
    const pokemon = AppState.pokemonApi
    let pokemonList = ''
    pokemon.forEach(pokemon => pokemonList += Pokemon.PokemonListTemplate(pokemon.name))
    setHTML('pokemon-list', pokemonList)
  }

  async getPokemonByName(pokemonName) {
    try {
      console.log('pokemon', pokemonName)
      await pokemonApiService.getPokemonByName(pokemonName)
    } catch (error) {
      console.error(error)
      Pop.toast(`Couldn't get ${pokemonName}`, error)
    }
  }

  drawActivePokemon() {
    const activePokemon = AppState.activePokemon
    setHTML('active-pokemon', activePokemon.ActivePokemonCard)
  }

}

