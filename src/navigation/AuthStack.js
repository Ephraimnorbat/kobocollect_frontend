import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../constants/theme';

import RoleManagementScreen from '../screens/admin/RoleManagementScreen';
import ProfileManagementScreen from '../screens/admin/ProfileManagementScreen';

import LoginScreen from '../screens/auth/LoginScreen';
import UserManagementScreen from '../screens/admin/UserManagementScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
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
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="UserManagement" 
        component={UserManagementScreen}
        options={{ title: 'User Management' }}
      />
      <Stack.Screen 
        name="RoleManagement" 
        component={RoleManagementScreen}
        options={{ title: 'Role Management' }}
        />
        <Stack.Screen 
        name="ProfileManagement" 
        component={ProfileManagementScreen}
        options={{ title: 'Profile Management' }}
        />
    </Stack.Navigator>
  );
};

export default AuthStack;




