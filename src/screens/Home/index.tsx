import React, { useEffect, useState } from 'react';
import { useAppDiscpatch, useAppSelector } from '../../redux/store';
import { AlertText, Input, InputField } from '@gluestack-ui/themed';
import WhiteButton from '../../components/button';
import GridGames from '../../components/gridView';
import { Container, ButtonContainer, ButtonSpacer } from './styles';
import { fetchById, fetchGames } from '../../api/apiService';
import { useNavigation } from '@react-navigation/native';
import { DrawerTypes } from '../../routes';
import { handleFindGameByApiId, handleFindGameListByUserId } from '../../service/gameService';

type Props = {};

interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

const Home: React.FC<Props> = () => {
  const navigation = useNavigation<DrawerTypes>()
  const dispatch = useAppDiscpatch();
  const userId = useAppSelector(state => state.auth.userId)
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [games, setGames] = useState<Game[]>([]);
  const [refresh, setRefresh] = useState(false)
  const [category, setCategory] = useState()

  const handlePressButton = (category: string) => {
    switch (category) {
      case 'playing':
        
        break;
    
      default:
        break;
    }
  };

  const fetchData = async () => {
    try {
      const gamesData = await fetchGames();
      console.log(gamesData)
      setGames(gamesData);
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  };

  const fetchLists = async () => {
    let preGames: Game[] = []
    let data
  
    try {
      const response = await handleFindGameListByUserId(userId)
      console.log(response.data)
      data = response.data
    } catch (error) {
      console.log(error)
    }
  
    if (data) {
      try {
        const fetchPromises = data[0].games.map(async (item: { apiReference: string }) => {
          const newId = parseInt(item.apiReference)
          const response = await fetchById(newId)
          return response
        })
  
        const gamesData = await Promise.all(fetchPromises)
        preGames = gamesData
      } catch (error) {
        console.error('Erro ao buscar jogos:', error)
      }
    }
  
    setRefresh(false)
    setGames(preGames)
  }
  useEffect(() => {
    console.log(userId)
    fetchLists()
    const unsubscribe = navigation.addListener('focus', () => {
      // Ação que você deseja realizar quando a tela estiver focada/aparecendo
      setRefresh(true)
      console.log('Tela foi focada! Execute sua lógica aqui.');
    });

    // Função de limpeza, remove o listener quando o componente é desmontado
    return unsubscribe;
    /* fetchData() */
  }, [refresh]);

  return (
    <Container>
      {/* Inserir pesquisa */}
     {/*  <Input
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
      </Input> */}

      {/* Botões */}
      {/* <ButtonContainer>
        <WhiteButton onPress={() => handlePressButton('playing')} title="Playing" />
        <ButtonSpacer />
        <WhiteButton onPress={() => handlePressButton('toplay')} title="To Play" />
        <ButtonSpacer />
        <WhiteButton onPress={() => handlePressButton('paused')} title="Paused" />
        <ButtonSpacer />
        <WhiteButton onPress={() => handlePressButton('played')} title="Played" />
        <ButtonSpacer />
        <WhiteButton onPress={() => handlePressButton('favorites')} title="Favorites" />
      </ButtonContainer> */}

      {/* Grade de Jogos */}

      <GridGames games={games} searchTerm={searchTerm} searching={false} userId={userId} refresh={setRefresh}/>

    </Container>
  );
};

export default Home;
