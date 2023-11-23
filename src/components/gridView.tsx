import React from 'react';
import { FlatList, View, Image, Text, StyleSheet } from 'react-native';

interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

interface GridGamesProps {
  games: Game[];
  searchTerm: string;
}

const GridGames: React.FC<GridGamesProps> = ({ games, searchTerm }) => {
  // Verifique se games é definido antes de aplicar o filtro
  const filteredGames = games ? games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <FlatList
      data={filteredGames}
      numColumns={3}
      renderItem={({ item }) => (
        <View style={styles.gridItem}>
          <Image style={styles.image} source={{ uri: item.background_image }} resizeMode="cover" />
          <View style={styles.overlayContainer}>
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
              <Text style={styles.gameName}>{item.name}</Text>
              <Text style={styles.gameRating}>{item.rating}</Text>
            </View>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
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

export default GridGames;
