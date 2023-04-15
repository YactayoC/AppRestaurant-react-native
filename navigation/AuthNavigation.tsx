import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login, Register } from '../screens';
import HomeTabNavigator from './HomeTabNavigator';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  HomeMain: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AuthNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="HomeMain" component={HomeTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// tabBar={() => null}
