import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorites, Home, Offers } from '../screens';

export type RootTabParamList = {
  Home: undefined;
  Favorites: undefined;
  Offers: undefined;
  Cart: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Favorites" component={Favorites} options={{ headerShown: false }} />
      <Tab.Screen name="Offers" component={Offers} options={{ headerShown: false }} />
      <Tab.Screen name="Cart" component={Favorites} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Home} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
