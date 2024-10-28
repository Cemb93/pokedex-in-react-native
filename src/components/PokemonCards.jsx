import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PokemonCards = ({ name, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PokemonCards;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});