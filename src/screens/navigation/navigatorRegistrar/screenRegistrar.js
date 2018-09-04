import { Navigation } from 'react-native-navigation';
import {HOME_SCREEN, SIDE_DRAWER, FAVOURITE_SCREEN, CONTINENT_SCREEN, COUNTRY_SCREEN, NEWS_SCREEN, WEB_SCREEN} from "../../../utility/screenConstants"
import HomeScreen from '../HomeScreen';
import SideDrawer from '../SideDrawer';
import FavouriteScreen from '../FavouriteScreen';
import ContinentScreen from '../ContinentScreen';
import CountryScreen from '../CountryScreen';
import NewsScreen from '../NewsScreen';
import WebScreen from '../../webview/VanoWebview';

import {Provider} from 'react-redux';


export default function registerScreens(store) { 
    Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);
    Navigation.registerComponent(SIDE_DRAWER, () => SideDrawer, store, Provider);
    Navigation.registerComponent(CONTINENT_SCREEN, () => ContinentScreen);
    Navigation.registerComponent(FAVOURITE_SCREEN, () => FavouriteScreen);
    Navigation.registerComponent(COUNTRY_SCREEN, () => CountryScreen);
    Navigation.registerComponent(WEB_SCREEN, () => WebScreen);
    Navigation.registerComponent(NEWS_SCREEN, () => NewsScreen);

}