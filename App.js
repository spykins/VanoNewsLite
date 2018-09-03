import {
  Navigation
} from 'react-native-navigation';
import registerScreens from './src/screens/navigation/navigatorRegistrar/screenRegistrar';
import {
  HOME_SCREEN,
  SIDE_DRAWER,
  SIDE_DRAWER_TOGGLE
} from './src/utility/screenConstants';
import Icon from 'react-native-vector-icons/Ionicons'
import {
  Platform
} from 'react-native'

registerScreens();

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
              id: SIDE_DRAWER_TOGGLE
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