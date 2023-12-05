import React, { useEffect } from 'react';
import { useState } from 'react'
import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer"
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Login from "../screens/SignScreens/Login"
import SignIn from '../screens/SignScreens/SignIn'
import SignUp from '../screens/SignScreens/SignUp'
import SearchGames from '../screens/SearchGames';
import { useAppSelector } from '../redux/store';

type DrawerNavigationTypes = {
    Home: undefined
    Profile: undefined
    SearchGames: undefined
}

type StacknavigationTypes = {
    Login: undefined,
    SignIn: undefined
    SignUp: undefined
}

export type DrawerTypes = DrawerNavigationProp<DrawerNavigationTypes>
export type StackTypes = StackNavigationProp<StacknavigationTypes>

const Routes = () => {

    const isLogged = useAppSelector(state => state.auth.isLogged)
    const Drawer = createDrawerNavigator()
    const Stack = createStackNavigator()    

    return (
        isLogged
            ?
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Stack.Screen name = "SearchGames" component={SearchGames}/>
                <Stack.Screen name="Profile" component={Profile} />
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