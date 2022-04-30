import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import User_Page from '../screens/User_Page';
import Home from '../screens/home';

const Drawer = createDrawerNavigator();

const AppStack = ({navigation}) => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="home"
        component={Home}
      />
   
    </Drawer.Navigator>
  );
};

export default AppStack;