import React, {Component} from 'react';
import { 
  View
} from 'react-native';
import  {
  MainFeed,
  Login,
  Camera,
  Profile,
  Registeration
} from './components/screens/index';
import { createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator } from 'react-navigation';

const TabMenu = createBottomTabNavigator({
  feed : MainFeed,
  camera : Camera,
  profile : Profile
});
const loginNav = createStackNavigator({
    login : Login,
    register : Registeration
});
const MainStack = createAppContainer(createSwitchNavigator({
  loginAuth : loginNav,
  main : TabMenu
}));



export default class InstaClone extends Component {
  
    render() {
        return (
          <MainStack />
        );
      }
}
