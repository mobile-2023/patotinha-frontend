import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { fetchGames } from '../API/apiService';

interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number; // Adicionando a propriedade de rating
}

const GridGames: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gamesData = await fetchGames();
        setGames(gamesData);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      data={games}
      numColumns={3}
      renderItem={({ item }) => (
        <View style={styles.gridItem}>
          <Image
            style={styles.image}
            source={{ uri: item.background_image }}
            resizeMode="cover"
          />
          <View style={styles.overlayContainer}>
            <View style={styles.overlay} />
            <Text style={styles.gameName}>{item.name}</Text>
            <Text style={styles.gameRating}>{item.rating}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
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
    height: '15%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },
  gameName: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  gameRating: {
    color: 'white',
    fontSize: 10,
  },
});

export default GridGames;
