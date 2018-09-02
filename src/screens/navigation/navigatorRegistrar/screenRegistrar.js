import { Navigation } from 'react-native-navigation';
import {HOME_SCREEN, SIDE_DRAWER} from "../../../utility/screenConstants"
import HomeScreen from '../HomeScreen';
import SideDrawer from '../SideDrawer';
export default function registerScreens() { 
    Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);
    Navigation.registerComponent(SIDE_DRAWER, () => SideDrawer);

}