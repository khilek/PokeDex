



export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickname = data.nickname
    this.img = data.sprites.front_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types[0].type.name
    this.creatorId = data.creatorId
  }

  get ActivePokemonCard() {
    return `
  
  <div class="card">
  <h1>${this.name}</h1>
  <hr />
  <img src="${this.img}" alt="">
</div>
<div class="card">
  <div class="col-12 d-flex justify-content-around">
    <div>Height: ${this.height}"</div>
    <div>Weight: ${this.weight}lbs</div>
    <div>Type: ${this.types}</div>
  </div>
</div>
  `
  }



  static PokemonListTemplate(pokemonName) {
    return `
    <button onclick="app.PokemonsController.getPokemonByName('${pokemonName}')" class="btn border border-bottom p-2 w-100 text-start mb-2 selectable">
    ${pokemonName}
    </button>
    `
  }
}