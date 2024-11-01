import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store';
import Screen1 from './Screen/screen1';
import Screen2 from './Screen/screen2';
import Screen3 from './Screen/screen3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Screen1' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Screen1' component={screen1} />
          <Stack.Screen name='Screen2' component={screen2} />
          <Stack.Screen name='Screen3' component={screen3} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
