import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Home, Login, Signup, Splash } from '../index';


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
      <Stack.Navigator
      initialRouteName='Signup'
        screenOptions={{
          headerShown: false
         }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login}/> 
        <Stack.Screen name='Signup' component={Signup}/> 
         <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation