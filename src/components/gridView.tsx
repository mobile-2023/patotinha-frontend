import React, { useState } from 'react';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import styled from 'styled-components/native';
import { handleCreateGame, handleCreateGameList, handleDeleteGame, handleFindGameByApiId, handleFindGameListByName, handleFindGameListByUserId, handleUpdateGameList } from '../service/gameService';
import { DrawerTypes } from '../routes';
import { useNavigation } from '@react-navigation/native';


interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

interface GridGamesProps {
  games: Game[];
  searchTerm: string;
  searching: boolean
  userId: string
  refresh: React.Dispatch<React.SetStateAction<boolean>>
}

const GridGames: React.FC<GridGamesProps> = ({ games, searchTerm, searching, userId, refresh }) => {
  // Verifique se games é definido antes de aplicar o filtro
  const filteredGames = games ? games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];
  const [modal, setModal] = useState(false)
  const [category, setCategory] = useState()
  const navigation = useNavigation<DrawerTypes>()

  const handleSelectGame = async (id: number, item: object) => {


    console.log(item)

    const stringId = id.toString()
    const date = new Date()
    let isList = false
    let isGame = false
    let list = []
    let game = []
    let user = []

    try {
      const responseList = await handleFindGameListByUserId(userId)
      const responseGame = await handleFindGameByApiId(stringId)
      if (responseList.data.length > 0) {
        isList = true
        list = responseList.data
      }
      if (responseGame.data.length > 0) {
        isGame = true
        game = responseGame.data
      }
    } catch (error) {
      throw error
    }

    console.log(isList)
    console.log(isGame)
    console.log(list)

    if (isList && isGame) {
      list[0].games.push(game[0])
      console.log(list[0])
      try {
        const response = await handleUpdateGameList(list[0].listId, { games: list[0].games })
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }

    } else if (isList && !isGame) {
      try {
        const responseGame = await handleCreateGame({ apiReference: stringId, startedAt: date, finishedAt: date })

        const responseUserList = await handleFindGameListByUserId(userId)
        console.log(responseUserList.data)

        list = responseUserList.data[0].games
        console.log(list)
        list.push(responseGame.data)

        const response = await handleUpdateGameList(list[0].listId, { games: list })

        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    } else if (!isList && isGame) {
      try {
        const responseList = await handleCreateGameList({ name: 'playing', userId: userId })

        const responseUserList = await handleFindGameListByUserId(userId)
        console.log(responseUserList.data)
        list = responseUserList.data[0]

        const response = await handleUpdateGameList(list.listId, { games: list.games })

        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const responseGame = await handleCreateGame({ apiReference: stringId, startedAt: date, finishedAt: date })

        const responseList = await handleCreateGameList({ name: 'playing', userId: userId })

        const responseUserList = await handleFindGameListByUserId(userId)

        let list = responseUserList.data[0]
        list.push(responseGame.data[0])

        const response = await handleUpdateGameList(list.listId, { games: list.games })

        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

  }

  const handleDeleteFromList = async(id: number) => {

    let newId = id.toString()
    let gameId

    try {
      const response = await handleFindGameListByUserId(userId)
      let data = response.data[0].games
      console.log(data)
      data.forEach((item: { apiReference: string; gameId: any; }) => {
        if (item.apiReference === newId) {
          gameId = item.gameId
        }
      })
    } catch (error) {
      throw error
    }

    try {
      if (gameId) {
        const response = await handleDeleteGame(gameId);
        console.log(response.data)
        setModal(false)
      }
    } catch (error) {
      throw error
    }

    refresh(true)
  }

  return (
    <FlatList
      data={filteredGames}
      numColumns={3}
      renderItem={({ item }) => (
        <>
          <Modal
            visible={modal}
            transparent={true}
            animationType="slide"
            onRequestClose={() => {
              setModal(false);
            }}
          >
            <ModalBackground>
              <ButtonArea>
                <ButtonText>Jogando</ButtonText>
              </ButtonArea>
              <ButtonArea onPress={() => handleDeleteFromList(item.id)}>
                <ButtonText>Deletar</ButtonText>
              </ButtonArea>
              <ButtonArea onPress={() => {setModal(false)}}>
                <ButtonText>Voltar</ButtonText>
              </ButtonArea>
            </ModalBackground>
          </Modal>
          <TouchableOpacity style={styles.gridItem} onPress={() => { searching ? handleSelectGame(item.id, item) : setModal(true);navigation.navigate('GameDetail', { gameId: item.id })}}>
            <Image style={styles.image} source={{ uri: item.background_image }} resizeMode="cover" />
            <View style={styles.overlayContainer}>
              <View style={styles.overlay} />
              <View style={styles.textContainer}>
                <Text style={styles.gameName}>{item.name}</Text>
                <Text style={styles.gameRating}>{item.rating}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </>
      )}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={
        <>
          <ButtonText>Você não tem jogos :( !</ButtonText> 
        </>
      }
    />
  );
};



const styles = StyleSheet.create({
  gridItem: {
    width: 120,
    height: 150,
    margin: 5,
    position: 'relative',
  },
  image: {
    flex: 1,
  },
  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  overlay: {
    height: '35%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
  },
  gameName: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  gameRating: {
    color: 'white',
    fontSize: 10,
  },
});

const ModalBackground = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ButtonArea = styled.TouchableOpacity`
  width: 210px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 10px;
  margin: 5px 0;
`;

const ButtonText = styled.Text`
  font-size: 18px;
  color: #FFFFFF;
`;

export default GridGames;
function handlFindGameByApiId(stringId: string) {
  throw new Error('Function not implemented.');
}

