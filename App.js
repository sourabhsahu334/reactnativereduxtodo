/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Provider } from 'react-redux';
import store from './store';
import TodoApp from './screens/Todolist';


const Stack = createStackNavigator();

const App = () => {
  return (
<Provider store={store}>
  <TodoApp/>
</Provider>
  );
};

export default App;
