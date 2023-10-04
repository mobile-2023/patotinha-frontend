import { GluestackUIProvider } from "@gluestack-ui/themed"
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <GluestackUIProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </Provider>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
