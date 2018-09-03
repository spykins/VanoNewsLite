import {
  Navigation
} from 'react-native-navigation';
import registerScreens from './src/screens/navigation/navigatorRegistrar/screenRegistrar';
import {
  HOME_SCREEN,
  SIDE_DRAWER,
  CONTINENT_SCREEN,
  FAVOURITE_SCREEN,
  SIDE_DRAWER_TOGGLE_EVENT_ID
} from './src/utility/screenConstants';
import Icon from 'react-native-vector-icons/Ionicons'
import {
  Platform
} from 'react-native'
import configureStore from "./src/store/configureStore";

const store = configureStore();
registerScreens(store);

Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : 'ios-menu', 30)
  .then((icon) => {
      Navigation.startSingleScreenApp({
        screen: {
          screen: HOME_SCREEN,
          title: 'News',
          navigatorButtons: {
            leftButtons: [{
              icon,
              title: 'Menu',
              id: SIDE_DRAWER_TOGGLE_EVENT_ID
            }]
          },
        },
        drawer: {
          left: {
            screen: SIDE_DRAWER
          }
        }
      });
    },

    (error) => {
      console.log(error);
    })