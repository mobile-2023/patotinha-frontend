import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { fetchGames } from '../../api/apiService';
import * as styles from './styles';
import TableComponent from '../../components/tables';
import { tableContainer } from './styles';

type StackTypes = {
  Login: undefined;
  SignIn: undefined;
  SignUp: undefined;
  GameDetail: { gameId: number };
};

interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

type GameDetailScreenRouteProp = RouteProp<StackTypes, 'GameDetail'>;

interface GameDetailScreenProps {
  route: GameDetailScreenRouteProp;
}

const GameDetailScreen: React.FC<GameDetailScreenProps> = ({ route }) => {
  const { gameId } = route.params;
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const gamesData = await fetchGames();
        
        const selectedGame = gamesData.find((game: Game) => game.id === gameId);
  
        if (selectedGame) {
          setGame(selectedGame);
        }
      } catch (error) {
        console.error('Erro ao obter detalhes do jogo:', error);
      }
    };
  
    fetchGameDetails();
  }, [gameId]);
  
  const table1Data = [
    ['Rating', game?.rating],
    ['Id', game?.id],
    ['Publishers', game?.publishers]
  ];

  const table2Data = [
    ['Slug', game?.slug],
    ['Language', game?.language],
    ['Developer',game?.developers],
  ];
  return (
    <View style={styles.gameDetailContainer.container}>
      {game ? (
        <>
         <View style = {styles.gameDetailContainer.column}>
          <Image source={{ uri: game.background_image }} style={styles.gameImage.image} />
             <Text style={styles.gameTitle.title}>{game.name}</Text>
          </View>
          <View style = {tableContainer.container}>
            <TableComponent data={table1Data}></TableComponent>
            <TableComponent data={table2Data} />
          </View>
          <View>
            <Text>Description</Text>
            <Text>Armed with a high-tech Quantum Manipulator device, players can manipulate the fabric of space and time to solve mind-bending puzzles and unveil the mysteries of this otherworldly realm. As players progress, they encounter bizarre creatures, encounter time anomalies, and unlock new abilities to traverse the ever-shifting landscapes. With stunning visuals, a captivating storyline, and challenging puzzles that test the boundaries of reality, "Quantum Shift" offers a unique gaming experience that blends science fiction with mind-bending gameplay.</Text>
          </View>
        </>
      ) : (
        <Text>Carregando informações...</Text>
      )}
    </View>
  );
};

export default GameDetailScreen;
