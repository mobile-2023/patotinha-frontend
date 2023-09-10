import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer"

import Home from '../screens/Home'

type DrawerNavigationTypes = {
    Home: undefined
}

export type DrawerTypes = DrawerNavigationProp<DrawerNavigationTypes>

const Routes = () => {

    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
        </Drawer.Navigator>
    )
}

export default Routes