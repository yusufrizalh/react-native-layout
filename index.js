/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import StackHeaderFooter from './StackHeaderFooter'; 
import EasyGrid from './EasyGrid';
import FlatLists from './FlatLists';

AppRegistry.registerComponent(appName, () => FlatLists);
