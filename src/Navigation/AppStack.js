import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import User_Page from '../screens/User_Page';
import Home from '../screens/home';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="User_Page"
        component={User_Page}
      />
   
    </Drawer.Navigator>
  );
};

export default AppStack;