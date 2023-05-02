import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Animated, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import { useAtomValue } from 'jotai';

import { RootNativeStackParamList } from '../navigation/RootNavigation';
import { Colors } from '../models';
import { authAtom } from '../store';

interface Props {
  showBack?: boolean;
  titleScreen: string;
  showProfileImage?: boolean;
}

export default function ScreenInfo({ showBack, titleScreen, showProfileImage = true }: Props) {
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList, 'Main'>>();
  const auth = useAtomValue(authAtom);

  return (
    <Animated.View style={styles.screen}>
      <View style={styles.screen_info}>
        {showBack && (
          <Ionicons name="chevron-back-outline" size={30} color="#000" onPress={() => navigation.goBack()} />
        )}
        <Text style={styles.screen_title}>{titleScreen}</Text>
      </View>
      {showProfileImage ? (
        auth?.client?.profile ? (
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Main', { screen: 'Profile' })}>
            <Image style={styles.screen_image} source={{ uri: auth?.client?.profile }} />
          </TouchableWithoutFeedback>
        ) : (
          <IconFeather name="user" size={30} color="#000" />
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
    color: Colors.black,
  },

  screen_image: {
    borderRadius: 50,
    width: 45,
    height: 45,
  },
});
