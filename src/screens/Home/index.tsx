import React from 'react';
import { useAppDiscpatch } from '../../redux/store'
import { Input, InputField } from '@gluestack-ui/themed';
import WhiteButton from '../../components/button';
import GridGames from '../../components/gridView'
import {
    Container,
    ButtonContainer, 
    ButtonSpacer, 
} from './styles'

type Props = {}

const Home = (props: Props) => {
    const dispatch = useAppDiscpatch()

    const handlePressButton1 = () => {
    };

    const handlePressButton2 = () => {
    };

    const handlePressButton3 = () => {
    };
    const handlePressButton4 = () => {
    };

    return (
        <Container>
           

            {/* Inserir pesquisa */}
            <Input
                variant="outline"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}>
                <InputField placeholder="Enter Text here" />
            </Input>

             {/* Botões */}
             <ButtonContainer>
                <WhiteButton onPress={handlePressButton1} title="PLaying" />
                <ButtonSpacer />
                <WhiteButton onPress={handlePressButton2} title="To Play" />
                <ButtonSpacer />
                <WhiteButton onPress={handlePressButton3} title="Paused" />
                <ButtonSpacer />
                <WhiteButton onPress={handlePressButton4} title="Favorites" />
            </ButtonContainer>

            {/* Grade de Jogos */}
            <GridGames />
        </Container>
    )
}

export default Home;
