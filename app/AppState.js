import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Pokemon } from "./models/Pokemon.js"

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {{Pokemon}[]} */
  pokemonApi = []

  /**@type {Pokemon} */
  activePokemon = null

}

export const AppState = createObservableProxy(new ObservableAppState())