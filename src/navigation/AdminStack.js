import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RoleManagementScreen from '../screens/admin/RoleManagementScreen';
import ProfileManagementScreen from '../screens/admin/ProfileManagementScreen';
import UserManagementScreen from '../screens/admin/UserManagementScreen';
import AdminDashboard from '../screens/admin/AdminDashboard';
import { COLORS } from '../constants/theme';

const Stack = createStackNavigator();

const AdminStack = () => {
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
        name="AdminDashboard"
        component={AdminDashboard}
        options={{ title: 'Admin Dashboard' }}
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
      <Stack.Screen
        name="UserManagement"
        component={UserManagementScreen}
        options={{ title: 'User Management' }}
      />
    </Stack.Navigator>
  );
};

export default AdminStack;
