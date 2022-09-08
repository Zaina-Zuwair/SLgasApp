import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from "./screens/Home";
import LogIn from "./screens/LogIn";
import Register from "./screens/register";
import DashBoard from './screens/dashboard';
import searchGas from './screens/fueltype';
import Search from './screens/search';
import Live from './screens/live';  
import Notifications from './screens/notifications';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name=" " component={Home} />
        <Drawer.Screen name="LogIn" component={LogIn} />
        <Drawer.Screen name="SignUp" component={Register} />
        <Drawer.Screen name="DashBoard" component={DashBoard} />
        <Drawer.Screen name="Fuel Type" component={searchGas}/>
        <Drawer.Screen name="Search Availability" component={Search}/>
        <Drawer.Screen name="Live" component={Live}/>
        <Drawer.Screen name='notifications' component={Notifications}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}