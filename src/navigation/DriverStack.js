import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DriverListScreen from '../screens/admin/driver/DriverListScreen';
import DriverDetailsScreen from '../screens/admin/driver/DriverDetailsScreen';
import AddDriverScreen from '../screens/admin/driver/AddDriverScreen';
import DriverAnalyticsScreen from '../screens/admin/driver/DriverAnalyticsScreen';
import { COLORS } from '../constants/theme';

const Stack = createStackNavigator();

const DriverStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="DriverList" 
        component={DriverListScreen}
        options={{ title: 'Drivers' }}
      />
      <Stack.Screen 
        name="DriverDetails" 
        component={DriverDetailsScreen}
        options={{ title: 'Driver Profile' }}
      />
      <Stack.Screen 
        name="AddDriver" 
        component={AddDriverScreen}
        options={{ title: 'Add New Driver' }}
      />
      <Stack.Screen 
        name="DriverAnalytics" 
        component={DriverAnalyticsScreen}
        options={{ title: 'Driver Analytics' }}
      />
    </Stack.Navigator>
  );
};

export default DriverStack;
