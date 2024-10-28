import axios from "axios";

export default class AxiosRequiest {
  async getAllPokemon(url, setPokemon, setFilteredPokemon) {
    const { data } = await axios.get(url);
    console.log('data:', data);
    const allPokemon = await Promise.all(data.results.map(async (el) => {
      const { data } = await axios.get(el.url);
      return {
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        image: data.sprites.other.home.front_default,
      }
    }))
    setPokemon(allPokemon);
    setFilteredPokemon(allPokemon);
  }
}
