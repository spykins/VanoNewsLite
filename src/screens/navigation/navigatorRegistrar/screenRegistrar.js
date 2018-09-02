import { Navigation } from 'react-native-navigation';
import {HOME_SCREEN} from "../../../utility/screenConstants"
import HomeScreen from '../HomeScreen'
export default function registerScreens() { 
    Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);
}