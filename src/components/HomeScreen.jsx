import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, TextInput } from "react-native";
import PokemonCards from "./PokemonCards";
import AxiosRequiest from "../hooks";

const url = 'https://pokeapi.co/api/v2/pokemon/';
const axiosRequest = new AxiosRequiest();

function HomeScreen({ navigation }) {
  const [pokemon, setPokemon] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    axiosRequest.getAllPokemon(url, setPokemon, setFilteredPokemon);
  }, []);

  useEffect(() => {
    setFilteredPokemon(
      pokemon.filter((p) =>
        p.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText, pokemon]);
  // console.log('pokemon:', pokemon);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar Pokémon..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredPokemon}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PokemonCards name={item.name} image={item.image} 
            onPress={() => navigation.navigate('PokemonDetail', { pokemon: item })}
          />
        )}
        numColumns={6}
        style={styles.list}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});