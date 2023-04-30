import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen } from '../screens';
import LoginScreen2 from '../screens/auth/LoginScreen2';
import RegisterScreen2 from '../screens/auth/RegisterScreen2';

export type AuthNativeStackParamList = {
  Login: undefined;
  Register: undefined;
};

const AuthNavigator = createNativeStackNavigator<AuthNativeStackParamList>();

export default function AuthNavigation() {
  return (
    <AuthNavigator.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <AuthNavigator.Screen name="Login" component={LoginScreen2} />
      <AuthNavigator.Screen name="Register" component={RegisterScreen2} />
    </AuthNavigator.Navigator>
  );
}
