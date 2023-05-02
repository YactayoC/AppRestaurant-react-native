import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

import { CartScreen, FavoritesScreen, HomeScreen, OffersScreen, ProfileScreen } from '../screens';

export type HomeTabParamList = {
  Home: undefined;
  Favorites: undefined;
  Offers: undefined;
  Cart: undefined;
  Profile: undefined;
};

interface ViewWithIconProps {
  focused: boolean;
  name: string;
  type: 'Material' | 'Feather';
}

const MainTab = createBottomTabNavigator<HomeTabParamList>();

function ViewWithIcon({ focused, name, type }: ViewWithIconProps) {
  return (
    <View style={[styles.containerTab, { backgroundColor: focused ? '#323643' : 'white' }]}>
      {type == 'Material' ? (
        <MaterialIcon name={name} color={focused ? 'white' : '#323643'} size={25} />
      ) : (
        <IconFeather name={name} color={focused ? 'white' : '#323643'} size={23} />
      )}
    </View>
  );
}

export default function HomeNavigation() {
  return (
    <MainTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => <ViewWithIcon focused={focused} name="home" type="Feather" />,
        }}
      />
      <MainTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => <ViewWithIcon focused={focused} name="heart-outline" type="Material" />,
        }}
      />
      <MainTab.Screen
        name="Offers"
        component={OffersScreen}
        options={{
          tabBarIcon: ({ focused }) => <ViewWithIcon focused={focused} name="percent" type="Feather" />,
        }}
      />
      <MainTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => <ViewWithIcon focused={focused} name="shopping-bag" type="Feather" />,
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <ViewWithIcon focused={focused} name="user" type="Feather" />,
        }}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  containerTab: {
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
