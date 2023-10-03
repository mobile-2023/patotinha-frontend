import { useState } from 'react'
import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer"

import Home from '../screens/Home'
import Login from "../screens/Login"

type DrawerNavigationTypes = {
    Home: undefined
    Login: undefined
}

export type DrawerTypes = DrawerNavigationProp<DrawerNavigationTypes>

const Routes = () => {

    const Drawer = createDrawerNavigator()
    const [isLoged, setIsLoged] = useState(false)

    return (

        isLoged
            ?
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Login" component={Login} options={{ headerShown: false, swipeEnabled: false }} />
                <Drawer.Screen name="Home" component={Home} />
            </Drawer.Navigator>
            :
            <Login />
    )
}

export default Routes