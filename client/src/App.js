import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Logs from './logs/Logs';
import Appbar from './components/Appbar';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Appbar/>
        <Logs/>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
