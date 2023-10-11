import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import tela1 from './telas/tela1';
import tela2 from './telas/tela2';



const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tela1">
        <Stack.Screen name="tela1" component={tela1} />
        <Stack.Screen name="tela2" component={tela2}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;