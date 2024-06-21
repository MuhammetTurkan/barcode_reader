import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import BarcodeScreen from './screens/Barcode';
import SearchResultScreen from './screens/SearchResult';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from './navigation';

const Stack = createStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Barcode" component={BarcodeScreen} />
        <Stack.Screen name="SearchResult" component={SearchResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
