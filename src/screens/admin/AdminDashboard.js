import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderStack from '../../navigation/OrderStack';
import CustomerStack from '../../navigation/CustomerStack';
import DriverStack from '../../navigation/DriverStack';
import VehicleStack from '../../navigation/VehicleStack';
import AdminStack from '../../navigation/AdminStack';
import { COLORS } from '../../constants/theme';

const Tab = createBottomTabNavigator();

const AdminDashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
      }}
    >
      <Tab.Screen 
        name="Orders" 
        component={OrderStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Customers" 
        component={CustomerStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Drivers" 
        component={DriverStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Vehicles" 
        component={VehicleStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Admin" 
        component={AdminStack}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AdminDashboard;
