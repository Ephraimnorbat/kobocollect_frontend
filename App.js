import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';

import SplashScreen from './src/screens/SplashScreen';;




import AuthStack from './src/navigation/AuthStack';
import OrderStack from './src/navigation/OrderStack';
import DriverStack from './src/navigation/DriverStack';
import VehicleStack from './src/navigation/VehicleStack';
import CustomerStack from './src/navigation/CustomerStack';
import AdminStack from './src/navigation/AdminStack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Splash"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="Orders" component={OrderStack} />
          <Stack.Screen name="Drivers" component={DriverStack} />
          <Stack.Screen name="Admin" component={AdminStack} />
          <Stack.Screen name="Vehicles" component={VehicleStack} />
          <Stack.Screen name="Customers" component={CustomerStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
