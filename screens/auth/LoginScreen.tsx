import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Controller, useForm } from 'react-hook-form';

import { RootNativeStackParamList } from '../../navigation/RootNavigation';
import { Colors } from '../../models';
import { CustomSafeAreaView, Loader } from '../../components';
import { AuthFormLogin } from '../../interfaces';
import { useAuth } from '../../hooks';
import { useAtomValue } from 'jotai';
import { authAtom } from '../../store';

export default function LoginScreen() {
  const { handleLogin } = useAuth();
  const { isLoading } = useAtomValue(authAtom);
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList, 'Auth'>>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthFormLogin>();

  const onLogin = async (data: AuthFormLogin) => {
    const response = await handleLogin(data);

    if (response.errorMessage) {
      return ToastAndroid.show(response.errorMessage, ToastAndroid.SHORT);
    }

    ToastAndroid.show(`Bienvenido ${response.data?.client.fullname}`, ToastAndroid.SHORT);
    navigation.navigate('Main', { screen: 'Home' });
    reset();
  };

  return (
    <CustomSafeAreaView styleCustom={{ alignItems: 'center', rowGap: 30, paddingBottom: 0 }}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://www.zarla.com/images/zarla-el-dente-1x1-2400x2400-20220318-4rd9m7m9hjq7t63mhp8r.png?crop=1:1,smart&width=250&dpr=2',
        }}
      />
      <KeyboardAwareScrollView style={styles.form} showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.form_group}>
          <Text style={styles.form_group_label}>Email</Text>
          <Controller
            control={control}
            rules={{
              required: { value: true, message: 'Este campo es requerido' },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: 'Por favor ingrese un email válido',
              },
            }}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.form_group_input}
                placeholder="email@gmail.com"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.email && <Text style={styles.text_error}>Este campo es requerido</Text>}
        </View>
        <View style={styles.form_group}>
          <Text style={styles.form_group_label}>Contraseña</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.form_group_input}
                placeholder="*****"
                secureTextEntry={true}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.password && <Text style={styles.text_error}>Este campo es requerido</Text>}
        </View>
        <TouchableOpacity style={styles.form_button} onPress={handleSubmit(onLogin)}>
          <Text style={styles.form_button_text}>Ingresar</Text>
        </TouchableOpacity>
        <View style={styles.options}>
          <Text
            style={styles.options_text}
            onPress={() => {
              navigation.navigate('Auth', { screen: 'Register' });
              reset();
            }}
          >
            ¿No tienes una cuenta? Registrate
          </Text>
          <Text
            style={styles.options_text}
            onPress={() => {
              navigation.navigate('Main', { screen: 'Home' });
              reset();
            }}
          >
            Ingresar sin usuario
          </Text>
        </View>
      </KeyboardAwareScrollView>
      <Loader isLoading={isLoading} />
    </CustomSafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  form: {
    flexGrow: 1,
    width: '90%',
    marginBottom: 20,
  },
  form_group: {
    rowGap: 15,
    marginBottom: 25,
    position: 'relative',
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
  form_button: {
    backgroundColor: Colors.black,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 25,
  },
  form_button_text: {
    color: Colors.text_white,
    fontSize: 16,
  },
  text_error: {
    position: 'absolute',
    color: Colors.text_error,
    fontSize: 15,
    bottom: -10,
    left: 0,
  },
  options: {
    rowGap: 15,
    alignItems: 'center',
  },
  options_text: {
    color: Colors.text_gray,
    fontSize: 14,
  },
});
