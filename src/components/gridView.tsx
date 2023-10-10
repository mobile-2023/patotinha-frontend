import React, { useEffect, useState } from 'react';
import { FlatList, View, Image, ActivityIndicator, Text , Dimensions, StatusBar, StyleSheet} from 'react-native';
import { fetchGames } from '../API/apiService';


interface Game {
  id: number;
  name: string;
  background_image: string;
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
        <View style={{ width: 120, height: 150, margin: 5 }}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: item.background_image }}
            resizeMode="cover"
          />
          <Text>{item.name}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default GridGames;
