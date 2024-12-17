import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CustomerListScreen from '../screens/admin/customer/CustomerListScreen';
import CustomerDetailsScreen from '../screens/admin/customer/CustomerDetailsScreen';
import AddCustomerScreen from '../screens/admin/customer/AddCustomerScreen';
import CustomerAnalyticsScreen from '../screens/admin/customer/CustomerAnalyticsScreen';
import { COLORS } from '../constants/theme';

const Stack = createStackNavigator();

const CustomerStack = () => {
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
        name="CustomerList" 
        component={CustomerListScreen}
        options={{ title: 'Customers' }}
      />
      <Stack.Screen 
        name="CustomerDetails" 
        component={CustomerDetailsScreen}
        options={{ title: 'Customer Profile' }}
      />
      <Stack.Screen 
        name="AddCustomer" 
        component={AddCustomerScreen}
        options={{ title: 'Add New Customer' }}
      />
      <Stack.Screen 
        name="CustomerAnalytics" 
        component={CustomerAnalyticsScreen}
        options={{ title: 'Customer Analytics' }}
      />
    </Stack.Navigator>
  );
};

export default CustomerStack;
