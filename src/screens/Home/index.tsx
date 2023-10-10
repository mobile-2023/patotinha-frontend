import React from 'react';
import { useAppDiscpatch, useAppSelector } from '../../redux/store'
import { incremment } from '../../redux/authSlice'
import { Input, InputField} from '@gluestack-ui/themed';
import GridGames from '../../components/gridView'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
    Container,
    Text,
    Button
} from './styles'

type Props = {}


const Tab = createMaterialTopTabNavigator();

const Home = (props: Props) => {

    const dispatch = useAppDiscpatch()
    const number = useAppSelector(state => state.auth.number)

    return (
        <Container>
            {/* INSERT SEARCH*/}
            <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}>
            <InputField placeholder="Enter Text here"/>
            </Input>

             {/*GRID GAMES*/ }
             <GridGames/>
       

        </Container>
    )
}

export default Home