import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardRoutes from './dashboard.routes';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="DashboardRoutes"
      component={DashboardRoutes}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Routes;
