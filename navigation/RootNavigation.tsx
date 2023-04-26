import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigation, { AuthNativeStackParamList } from './AuthNavigation';
import HomeTabNavigation, { HomeTabParamList } from './HomeTabNavigation';
import ProductNavigation, { ProductNativeStackParamList } from './ProductNavigation';

export type RootNativeStackParamList = {
  Auth: NavigatorScreenParams<AuthNativeStackParamList>;
  Main: NavigatorScreenParams<HomeTabParamList>;
  ProductInternal: NavigatorScreenParams<ProductNativeStackParamList>;
};

const RootStack = createNativeStackNavigator<RootNativeStackParamList>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Auth" component={AuthNavigation} />
        <RootStack.Screen name="Main" component={HomeTabNavigation} />
        <RootStack.Screen name="ProductInternal" component={ProductNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
