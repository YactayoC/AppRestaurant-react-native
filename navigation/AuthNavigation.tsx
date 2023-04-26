import { LoginScreen, RegisterScreen } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type AuthNativeStackParamList = {
  Login: undefined;
  Register: undefined;
};

const AuthNavigator = createNativeStackNavigator<AuthNativeStackParamList>();

export default function AuthNavigation() {
  return (
    <AuthNavigator.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <AuthNavigator.Screen name="Login" component={LoginScreen} />
      <AuthNavigator.Screen name="Register" component={RegisterScreen} />
    </AuthNavigator.Navigator>
  );
}
