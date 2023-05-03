import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAtomValue } from 'jotai';

import { Colors } from '../../../models';
import { CustomSafeAreaView, ScreenInfo } from '../../../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { authAtom } from '../../../store';

export default function SettingScreen() {
  const [imageUri, setImageUri] = useState<String>('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const auth = useAtomValue(authAtom);

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permisos insuficientes', 'Necesitas permitir el acceso a la galería para seleccionar una imagen.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <CustomSafeAreaView>
      <ScreenInfo titleScreen="Configurar" showBack={true} showProfileImage={false} />
      <View style={styles.form_container}>
        <View style={styles.profile}>
          <TouchableOpacity onPress={handlePickImage}>
            {imageUri ? (
              <Image style={styles.profile_image} source={{ uri: imageUri.toString() }} />
            ) : (
              <Image style={styles.profile_image} source={{ uri: auth.data?.client?.profile }} />
            )}
          </TouchableOpacity>
        </View>

        <KeyboardAwareScrollView style={styles.form} showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.form_group}>
            <TextInput style={styles.form_group_input} placeholder="Nombres" value={auth.data?.client?.fullname} />
          </View>
          <View style={styles.form_group}>
            <TextInput
              style={styles.form_group_input}
              placeholder="Direccion"
              value={auth.data?.client?.direction || ''}
            />
          </View>
          <View style={styles.form_group}>
            <TextInput
              style={styles.form_group_input}
              keyboardType="number-pad"
              placeholder="Celular"
              value={auth.data?.client?.phone || ''}
            />
          </View>
          <View style={styles.form_group}>
            <TextInput
              style={styles.form_group_input}
              placeholder="Direccion"
              value={auth.data?.client?.user.email}
              editable={false}
            />
          </View>
          <View style={styles.form_group}>
            <TextInput style={styles.form_group_input} placeholder="Contraseña actual" secureTextEntry={showPassword} />
            <MaterialIcon
              name="eye"
              size={24}
              style={styles.form_icon}
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>
          <View style={styles.form_group}>
            <TextInput
              style={styles.form_group_input}
              placeholder="Contraseña nueva"
              secureTextEntry={showPasswordConfirm}
            />
            <MaterialIcon
              name="eye"
              size={24}
              style={styles.form_icon}
              onPress={() => setShowPasswordConfirm(!showPasswordConfirm)}
            />
          </View>
          <TouchableOpacity style={styles.form_button}>
            <Text style={styles.form_button_text}>Actualizar</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  form_container: {
    flex: 1,
    alignItems: 'center',
    rowGap: 40,
    marginTop: 30,
  },
  profile: {
    position: 'relative',
    alignItems: 'center',
  },
  profile_image: {
    width: 180,
    height: 180,
    borderRadius: 100,
  },
  form: {
    width: '90%',
    margin: 'auto',
  },
  form_group: {
    marginBottom: 25,
    position: 'relative',
    height: 40,
    justifyContent: 'center',
  },
  form_group_label: {
    fontSize: 16,
  },
  form_group_input: {
    borderWidth: 1,
    borderColor: Colors.gray_2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  form_icon: {
    position: 'absolute',
    width: 24,
    right: 10,
    height: 24,
  },
  form_button: {
    backgroundColor: Colors.black,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  form_button_text: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
