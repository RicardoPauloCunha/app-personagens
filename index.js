import {AppRegistry} from 'react-native';
// import App from './App';
// import Personagens from "./src/pages/Personagens";
import Navegator from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navegator);
