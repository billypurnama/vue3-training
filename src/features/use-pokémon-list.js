import { reactive, toRefs } from 'vue'
import useFetch from './use-fetch'

export default function () {
  const state = reactive({
    pokémon: {},
  })

  const getRandom = (max) => {
    return Math.floor(Math.random() * Math.floor(max)) + 1
  }

  const pokédata = async () => {
    const number = getRandom(807)
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`
    const { response } = await useFetch(url, {})
    state.pokémon = response
    console.log(response)
  }

  pokédata()

  return { ...toRefs(state) }
}