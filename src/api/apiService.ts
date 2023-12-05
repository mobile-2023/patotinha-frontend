const API_KEY = 'ce1422bc377049538a0d61a04fbebc69';
const BASE_URL = 'https://api.rawg.io/api';

export const fetchGames = async () => {
  try {
    const response = await fetch(`${BASE_URL}/games?key=${API_KEY}&dates=2021-09-01,2023-09-30&platforms=18,1,7`);
    const data = await response.json();
    return data.results; 
  } catch (error: any) {
    throw new Error('Erro na solicitação da API RAWG: ' + (error.message || 'Erro desconhecido'));
  }
};

export const fetchPlatforms = async () => {
  try {
    const response = await fetch(`${BASE_URL}/platforms?key=${API_KEY}`);
    const data = await response.json();
    return data.results;
  } catch (error: any) {
    throw new Error('Erro na solicitação da API RAWG: ' + error.message);
  }
};

export const fetchById = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`)
    const data = await response.json()
    return data
  } catch (error) {
    
  }
}