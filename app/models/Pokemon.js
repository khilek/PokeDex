



export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.nickname = data.nickname
    this.img = data.img ? data.img : data.sprites.front_default
    this.weight = data.weight
    this.height = data.height;

    const maybeTypeObj = data.types[0].type;
    if (maybeTypeObj != undefined) {
      this.types = maybeTypeObj.name;
    }
    else {
      this.types = data.types[0];
    }

    this.creatorId = data.creatorId

  }

  get ActivePokemonCard() {
    return `
  
  <div class="card">
  <button onclick="app.SandboxPokemonController.savePokemonToList()" class="btn btn-primary position-absolute top-1"><i class="mdi mdi-book-plus"></i></button>
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

  get MyPokemonListTemplate() {
    return `
  <div class="row align-items-center border-bottom border-primary pb-1 mb-2 selectable">
  <div class="col-1">
    <input type="checkbox">
  </div>
  <div class="col">${this.name}</div>
  
  `
  }


}