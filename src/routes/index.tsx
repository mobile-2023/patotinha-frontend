import React from 'react';
import { useState } from 'react'
import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer"
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import Home from '../screens/Home'
import Login from "../screens/SignScreens/Login"
import SignIn from '../screens/SignScreens/SignIn'
import SignUp from '../screens/SignScreens/SignUp'

type DrawerNavigationTypes = {
    Home: undefined
}

type StacknavigationTypes = {
    Login: undefined,
    SignIn: undefined
    SignUp: undefined
}

export type DrawerTypes = DrawerNavigationProp<DrawerNavigationTypes>
export type StackTypes = StackNavigationProp<StacknavigationTypes>

const Routes = () => {

    const Drawer = createDrawerNavigator()
    const Stack = createStackNavigator()
    const [isLoged, setIsLoged] = useState(true)

    return (

        isLoged
            ?
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
            :
            <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="SignIn" component={SignIn}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
            </Stack.Navigator>
    )
}

export default Routes