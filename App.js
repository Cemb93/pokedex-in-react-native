import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonDetail from './src/components/PokemonDetail';
import HomeScreen from './src/components/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Pokémon List' }} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetail} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
