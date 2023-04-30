import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthNavigation, { AuthNativeStackParamList } from './AuthNavigation';
import HomeNavigation, { HomeTabParamList } from './HomeNavigation';
import ProductNavigation, { ProductNativeStackParamList } from './ProductNavigation';
import ProfileNavigation, { ProfileNativeStackParamList } from './ProfileNavigation';

export type RootNativeStackParamList = {
  Auth: NavigatorScreenParams<AuthNativeStackParamList>;
  Main: NavigatorScreenParams<HomeTabParamList>;
  ProductInternal: NavigatorScreenParams<ProductNativeStackParamList>;
  ProfileInternal: NavigatorScreenParams<ProfileNativeStackParamList>;
};

const RootStack = createNativeStackNavigator<RootNativeStackParamList>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Auth" component={AuthNavigation} />
        <RootStack.Screen name="Main" component={HomeNavigation} />
        <RootStack.Screen name="ProductInternal" component={ProductNavigation} />
        <RootStack.Screen name="ProfileInternal" component={ProfileNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
