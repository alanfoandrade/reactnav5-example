import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Profile from '../pages/Profile';
import Account from '../pages/Account';

const Tabs = createBottomTabNavigator();

const DashboardRoutes = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#34cb79',
        inactiveTintColor: '#6c6c80',
        style: {
          height: 63,
          padding: 10,
          backgroundColor: '#f0f0f5',
          flexDirection: 'row',
          alignItems: 'center',
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: 10,
        },
        keyboardHidesTabBar: true,
      }}
    >
      <Tabs.Screen name="Profile" component={Profile} />
      <Tabs.Screen name="Account" component={Account} />
    </Tabs.Navigator>
  );
};
export default DashboardRoutes;
