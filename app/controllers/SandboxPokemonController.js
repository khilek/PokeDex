import { AppState } from "../AppState.js";
import { sandboxPokemonService } from "../services/SandboxPokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


export class SandboxPokemonController {
  constructor() {

    AppState.on('myPokemon', this.drawMyPokemonList)

    AppState.on('account', this.getMyPokemonList)
  }

  async getMyPokemonList() {
    try {
      await sandboxPokemonService.getMyPokemonList
    } catch (error) {
      Pop.toast("Can't save Pokemon")
      console.error(error)
    }
  }
  async savePokemonToList() {
    try {
      await sandboxPokemonService.savePokemonToList()
    } catch (error) {
      Pop.toast("Can't save Pokemon")
      console.error(error)
    }
  }

  drawMyPokemonList() {
    const myPokemon = AppState.myPokemon
    let myPokemonList = ''
    myPokemon.forEach(pokemon => myPokemonList += pokemon.MyPokemonListTemplate)
    setHTML('pokeball', myPokemonList)
  }


}