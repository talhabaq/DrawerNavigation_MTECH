import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './StackNavigation/Home'
import About from './StackNavigation/About'
import SignIn from './StackNavigation/SignIn'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer=createDrawerNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle:{
            backgroundColor:"#e6e6e6",
            width:240,
          },
          drawerLabelStyle:{
            fontSize:18,
            color:'#333'
          },
          headerStyle:{
            backgroundColor:'#6200EE'
          },
          headerTintColor:"white",
          headerTitleAlign:'center'
        }}
      >
        <Drawer.Screen  name='SignIn' component={SignIn} options={{ headerShown: false }} />
        <Drawer.Screen  name='Home' component={Home}  />
        <Drawer.Screen  name='About' component={About} />
      </Drawer.Navigator>


    </NavigationContainer>
  )
}

export default App
