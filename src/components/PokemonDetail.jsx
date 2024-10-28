import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

const PokemonDetail = ({ route }) => {
  const { pokemon } = route.params;
  // console.log('pokemon:', pokemon);

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.info}>Height: {pokemon.height}</Text>
      <Text style={styles.info}>Weight: {pokemon.weight}</Text>
    </View>
  );
}

export default PokemonDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 550,
    height: 550,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 18,
  },
});