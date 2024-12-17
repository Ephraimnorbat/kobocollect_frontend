// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import VehicleListScreen from '../screens/admin/vehicle/VehicleListScreen';
// import VehicleDetailsScreen from '../screens/admin/vehicle/VehicleDetailsScreen';
// import AddVehicleScreen from '../screens/admin/vehicle/Management/AddVehicleScreen';
// import VehicleAnalyticsScreen from '../screens/admin/vehicle/VehicleAnalyticsScreen';
// import { COLORS } from '../constants/theme';

// const Stack = createStackNavigator();

// const VehicleMntStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: COLORS.primary,
//         },
//         headerTintColor: COLORS.white,
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}
//     >
//       <Stack.Screen 
//         name="VehicleList" 
//         component={VehicleListScreen}
//         options={{ title: 'Fleet Management' }}
//       />
//       <Stack.Screen 
//         name="VehicleDetails" 
//         component={VehicleDetailsScreen}
//         options={{ title: 'Vehicle Details' }}
//       />
//       <Stack.Screen 
//         name="AddVehicle" 
//         component={AddVehicleScreen}
//         options={{ title: 'Add New Vehicle' }}
//       />
//       <Stack.Screen 
//         name="VehicleAnalytics" 
//         component={VehicleAnalyticsScreen}
//         options={{ title: 'Fleet Analytics' }}
//       />
//     </Stack.Navigator>
//   );
// };

// export default VehicleMntStack;
