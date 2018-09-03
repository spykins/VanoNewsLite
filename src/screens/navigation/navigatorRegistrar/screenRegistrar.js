import { Navigation } from 'react-native-navigation';
import {HOME_SCREEN, SIDE_DRAWER, FAVOURITE_SCREEN, CONTINENT_SCREEN} from "../../../utility/screenConstants"
import HomeScreen from '../HomeScreen';
import SideDrawer from '../SideDrawer';
import FavouriteScreen from '../FavouriteScreen';
import ContinentScreen from '../ContinentScreen';

export default function registerScreens() { 
    Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);
    Navigation.registerComponent(SIDE_DRAWER, () => SideDrawer);
    Navigation.registerComponent(CONTINENT_SCREEN, () => ContinentScreen);
    Navigation.registerComponent(FAVOURITE_SCREEN, () => FavouriteScreen);

}