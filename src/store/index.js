import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listPokemon: [
      {
        id: 1,
        name:"bulbasaur",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      },
      {
        id: 2,
        name:"ivysaur",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      },
      {
        id: 3,
        name:"venusaur",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      },
      {
        id: 4,
        name:"charmander",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      },
      {
        id: 5,
        name:"charmeleon",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      },
      {
        id: 6,
        name:"charizard",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      },
      {
        id: 7,
        name:"squirtle",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      },
      {
        id: 8,
        name:"wartortle",
        imageSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
