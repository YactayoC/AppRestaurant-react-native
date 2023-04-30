import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HistoryOrderScreen, RecentOrderScreen, SettingScreen } from '../screens';

export type ProfileNativeStackParamList = {
  Setting: undefined;
  HistoryOrder: undefined;
  Order: undefined;
};

const ProfileNavigator = createNativeStackNavigator<ProfileNativeStackParamList>();

export default function ProfileNavigation() {
  return (
    <ProfileNavigator.Navigator initialRouteName="Setting" screenOptions={{ headerShown: false }}>
      <ProfileNavigator.Screen name="Setting" component={SettingScreen} />
      <ProfileNavigator.Screen name="HistoryOrder" component={HistoryOrderScreen} />
      <ProfileNavigator.Screen name="Order" component={RecentOrderScreen} />
    </ProfileNavigator.Navigator>
  );
}
