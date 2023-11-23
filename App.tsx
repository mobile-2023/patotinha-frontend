import { GluestackUIProvider } from "@gluestack-ui/themed"
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <GluestackUIProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
