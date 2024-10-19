import {View } from 'react-native';
import MainApp from './shared/main';
import { Provider } from 'react-redux';
import store from './shared/store';


export default function App() {
  return (
    <Provider store={store}>
       <MainApp />
    </Provider>
     
  );
}

