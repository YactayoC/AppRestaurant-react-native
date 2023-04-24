import { useNavigation } from '@react-navigation/native';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  showBack?: boolean;
  titleScreen: string;
  isLogged?: boolean;
  showProfileImage?: boolean;
}

export default function ScreenInfo({ showBack, titleScreen, isLogged = true, showProfileImage = true }: Props) {
  const navigation = useNavigation();

  return (
    <Animated.View style={styles.screen}>
      <View style={styles.screen_info}>
        {showBack && <Icon name="chevron-back-outline" size={30} color="#000" onPress={() => navigation.goBack()} />}
        <Text style={styles.screen_title}>{titleScreen}</Text>
      </View>
      {showProfileImage ? (
        isLogged ? (
          <Image style={styles.screen_image} source={require('../assets/images/profile/profile_2.jpeg')} />
        ) : (
          <Icon name="person-outline" size={30} color="#000" />
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
