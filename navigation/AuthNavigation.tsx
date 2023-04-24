import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen } from '../screens';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

const AuthNavigator = createStackNavigator<AuthStackParamList>();

export default function AuthNavigation() {
  return (
    <AuthNavigator.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <AuthNavigator.Screen name="Login" component={LoginScreen} />
      <AuthNavigator.Screen name="Register" component={RegisterScreen} />
    </AuthNavigator.Navigator>
  );
}
