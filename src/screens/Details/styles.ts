import { StyleSheet } from 'react-native';

export const gameDetailContainer = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#ffff',
  },
  column: {
    alignItems: 'center',
    marginRight: 20, // Espaçamento entre a imagem e o título
  },
});

export const gameImage = StyleSheet.create({
  image: {
    width: 175,
    height: 240,
    resizeMode: 'cover',
    marginBottom: 10,
    borderWidth: 1, 
    borderColor: 'white', 
  },
});

export const gameTitle = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'black',
  },
});

export const tableContainer = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 1,
  },
});
