import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigation, { AuthStackParamList } from './AuthNavigation';
import HomeTabNavigator, { HomeTabParamList } from './HomeTabNavigation';
import DishNavigation, { DishStackParamList } from './DishNavigation';

export type RootStackParamList = {
  Auth: {
    screen: keyof AuthStackParamList;
  };
  Main: {
    screen: keyof HomeTabParamList;
  };
  DishInternal: {
    screen: keyof DishStackParamList;
  };
};

const RootStack = createStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Auth" component={AuthNavigation} />
        <RootStack.Screen name="Main" component={HomeTabNavigator} />
        <RootStack.Screen name="DishInternal" component={DishNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
