import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens';

export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Home} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
