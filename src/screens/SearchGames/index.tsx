import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { Input, InputField } from '@gluestack-ui/themed';
import GridGames from '../../components/gridView';
import { fetchGames } from '../../api/apiService';

interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

type Props = {};

const SearchGames: React.FC<Props> = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

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

  const handleSearch = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <View>
      {/* Inserir pesquisa */}
      <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false}>
        <InputField placeholder="Enter Text here" onChangeText={handleSearch} />
      </Input>

      {/* Grade de Jogos com filtro */}
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <GridGames games={games} searchTerm={searchTerm} />
      )}
    </View>
  );
};

export default SearchGames;
