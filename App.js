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
import { FAVOURITE_SCREEN_TITLE, CONTINENT_SCREEN_TITLE, HOME_SCREEN_TITLE } from './src/utility/screenTitleConstants';
import Icon from 'react-native-vector-icons/Ionicons'
import {
  Platform
} from 'react-native'
import configureStore from "./src/store/configureStore";

  

const store = configureStore();
registerScreens(store);
let navigationIcon;
store.subscribe(() => {
  let { screenTapped } = store.getState().navigationReducers;
  
  //TODO: break into a function
  let title;
  switch (screenTapped) {
            case FAVOURITE_SCREEN:
                title = FAVOURITE_SCREEN_TITLE;
                break;
            case CONTINENT_SCREEN:
                title = CONTINENT_SCREEN_TITLE;
                break;
            default:
                title = HOME_SCREEN_TITLE;
  }
  //TODO: Duplicate code, move into function
  Navigation.startSingleScreenApp({
    screen: {
      screen: screenTapped,
      title,
      navigatorButtons: {
        leftButtons: [{
          icon: navigationIcon,
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
  console.log("In subscription ", screenTapped);
})

Icon.getImageSource(Platform.OS === 'android' ? "md-menu" : 'ios-menu', 30)
  .then((icon) => {
    navigationIcon = icon;
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