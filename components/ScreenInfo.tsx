import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  showBack?: boolean;
  titleScreen: string;
}

export default function ScreenInfo({ showBack, titleScreen }: Props) {
  return (
    <Animated.View style={styles.screen}>
      <View style={styles.screen_info}>
        {showBack && <Icon name="chevron-back-outline" size={30} color="#000" />}
        <Text style={styles.screen_title}>{titleScreen}</Text>
      </View>
      <Image style={styles.screen_image} source={require('../assets/images/profile/profile_2.jpeg')} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
