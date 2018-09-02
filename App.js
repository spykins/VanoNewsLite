
import { Navigation } from 'react-native-navigation';
import HomeScreen from './src/navigation/HomeScreen';

Navigation.registerComponent("com.spykins.vanonews.HomeScreen", () => HomeScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "com.spykins.vanonews.HomeScreen",
    title: 'Welcome'
  }
});
