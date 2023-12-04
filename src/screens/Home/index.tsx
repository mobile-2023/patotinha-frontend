import React, { useEffect, useState } from 'react';
import { useAppDiscpatch, useAppSelector } from '../../redux/store';
import { Input, InputField } from '@gluestack-ui/themed';
import WhiteButton from '../../components/button';
import GridGames from '../../components/gridView';
import { Container, ButtonContainer, ButtonSpacer } from './styles';
import { fetchGames } from '../../api/apiService';

type Props = {};

interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

const Home: React.FC<Props> = () => {
  const dispatch = useAppDiscpatch();
  const userId = useAppSelector(state => state.auth.userId)
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [games, setGames] = useState<Game[]>([]);

  const handlePressButton1 = () => { };
  const handlePressButton2 = () => { };
  const handlePressButton3 = () => { };
  const handlePressButton4 = () => { };
  const handlePressButton5 = () => { };

  const fetchData = async () => {
    try {
      const gamesData = await fetchGames();
      setGames(gamesData);
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  }

  useEffect(() => {
    console.log(userId)
    fetchData();
  }, []); // A dependência vazia garante que a chamada seja feita apenas uma vez durante a montagem

  return (
    <Container>
      {/* Inserir pesquisa */}
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField
          placeholder="Enter Text here"
          onChangeText={(text: React.SetStateAction<string>) => setSearchTerm(text)}
        />
      </Input>

      {/* Botões */}
      <ButtonContainer>
        <WhiteButton onPress={handlePressButton1} title="Playing" />
        <ButtonSpacer />
        <WhiteButton onPress={handlePressButton2} title="To Play" />
        <ButtonSpacer />
        <WhiteButton onPress={handlePressButton3} title="Paused" />
        <ButtonSpacer />
        <WhiteButton onPress={handlePressButton4} title="Played" />
        <ButtonSpacer />
        <WhiteButton onPress={handlePressButton5} title="Favorites" />
      </ButtonContainer>

      {/* Grade de Jogos */}
      <GridGames games={games} searchTerm={searchTerm} />
    </Container>
  );
};

export default Home;
