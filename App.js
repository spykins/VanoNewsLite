
import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens/navigation/navigatorRegistrar/screenRegistrar';
import {HOME_SCREEN, SIDE_DRAWER} from './src/utility/screenConstants';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: HOME_SCREEN,
    title: 'News'
  },
  drawer: {
    left: {
      screen: SIDE_DRAWER
    }
  }
});
