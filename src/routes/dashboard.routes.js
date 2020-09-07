import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import SettingsRoutes from './settings.routes';

const Drawer = createDrawerNavigator();

const DashboardRoutes = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={SettingsRoutes} />
    </Drawer.Navigator>
  );
};
export default DashboardRoutes;
