import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Animated, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { RootNativeStackParamList } from '../navigation/RootNavigation';

interface Props {
  showBack?: boolean;
  titleScreen: string;
  isLogged?: boolean;
  showProfileImage?: boolean;
}

export default function ScreenInfo({ showBack, titleScreen, isLogged = true, showProfileImage = true }: Props) {
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList, 'Main'>>();

  return (
    <Animated.View style={styles.screen}>
      <View style={styles.screen_info}>
        {showBack && (
          <Ionicons name="chevron-back-outline" size={30} color="#000" onPress={() => navigation.goBack()} />
        )}
        <Text style={styles.screen_title}>{titleScreen}</Text>
      </View>
      {showProfileImage ? (
        isLogged ? (
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Main', { screen: 'Profile' })}>
            <Image style={styles.screen_image} source={require('../assets/images/profile/profile_2.jpeg')} />
          </TouchableWithoutFeedback>
        ) : (
          <Ionicons
            name="person-outline"
            size={30}
            color="#000"
            onPress={() => navigation.navigate('Main', { screen: 'Profile' })}
          />
        )
      ) : null}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },

  screen_info: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  screen_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  screen_image: {
    borderRadius: 50,
    width: 45,
    height: 45,
  },
});
