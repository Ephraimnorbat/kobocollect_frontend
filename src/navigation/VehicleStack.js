import VehicleListScreen from '../screens/admin/Vehicle/VehicleListScreen';
import AddVehicleScreen from '../screens/admin/Vehicle/AddVehicleScreen';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../constants/theme';


const Stack = createStackNavigator();


const VehicleStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.white,
        }}
      >
        <Stack.Screen 
          name="VehicleList" 
          component={VehicleListScreen}
          options={{ title: 'Vehicles' }}
        />
        <Stack.Screen 
          name="AddVehicle" 
          component={AddVehicleScreen}
          options={{ title: 'Add New Vehicle' }}
        />
      </Stack.Navigator>
    );
  };
  
  export default VehicleStack;
  