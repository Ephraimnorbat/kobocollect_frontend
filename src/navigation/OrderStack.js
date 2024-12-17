import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderListScreen from '../screens/admin/order/OrderListScreen';
import OrderDetailsScreen from '../screens/admin/order/OrderDetailsScreen';
import OrderTrackingScreen from '../screens/admin/order/OrderTrackingScreen';
import CreateOrderScreen from '../screens/admin/order/CreateOrderScreen';
import OrderAnalyticsScreen from '../screens/admin/order/OrderAnalyticsScreen';
import { COLORS } from '../constants/theme';

const Stack = createStackNavigator();

const OrderStack = () => {
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
        name="OrderList" 
        component={OrderListScreen}
        options={{ title: 'Orders' }}
      />
      <Stack.Screen 
        name="OrderDetails" 
        component={OrderDetailsScreen}
        options={{ title: 'Order Details' }}
      />
      <Stack.Screen 
        name="OrderTracking" 
        component={OrderTrackingScreen}
        options={{ title: 'Track Order' }}
      />
      <Stack.Screen 
        name="CreateOrder" 
        component={CreateOrderScreen}
        options={{ title: 'New Order' }}
      />
      <Stack.Screen 
        name="OrderAnalytics" 
        component={OrderAnalyticsScreen}
        options={{ title: 'Analytics' }}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
