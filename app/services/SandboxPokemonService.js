import { api } from "./AxiosService.js"
import { Pokemon } from "../models/Pokemon.js"
import { AppState } from "../AppState.js"

export class SandboxPokemonService {

  async getMyPokemonList() {
    const response = await api.get('api/pokemon')
    console.log('Pokemon', response.data)
    const myPokemon = response.data.map(pokemon => new Pokemon(pokemon))
    AppState.myPokemon = myPokemon
  }

  async savePokemonToList() {
    console.log('Saving', AppState.activePokemon.name)
    const response = await api.post('api/pokemon', AppState.activePokemon)
    console.log('💾', response.data)
    const pokemon = new Pokemon(response.data);
    AppState.myPokemon.push(pokemon)
  }



}


export const sandboxPokemonService = new SandboxPokemonService