
import { Navigation } from 'react-native-navigation';
import registerScreens from './src/screens/navigation/navigatorRegistrar/screenRegistrar';
import {HOME_SCREEN} from './src/utility/screenConstants';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: HOME_SCREEN,
    title: 'News'
  }
});
