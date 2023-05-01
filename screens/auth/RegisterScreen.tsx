import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Controller, useForm } from 'react-hook-form';

import { RootNativeStackParamList } from '../../navigation/RootNavigation';
import { Colors } from '../../models';
import { CustomSafeAreaView, Loader } from '../../components';
import { useAuth } from '../../hooks';
import { AuthFormRegister } from '../../interfaces';

interface FormRegisterData {
  fullname: string;
  email: string;
  password: string;
}

export default function RegisterScreen() {
  const { handleRegister, isLoading } = useAuth();
  const navigation = useNavigation<NavigationProp<RootNativeStackParamList, 'Auth'>>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormRegisterData>();

  const onRegister = async (data: AuthFormRegister) => {
    const response = await handleRegister(data);

    if (response.errorMessage) {
      return ToastAndroid.show(response.errorMessage, ToastAndroid.SHORT);
    }

    ToastAndroid.show(response.data?.message!, ToastAndroid.SHORT);
    navigation.navigate('Auth', { screen: 'Login' });
    reset();
  };

  return (
    <CustomSafeAreaView styleCustom={{ alignItems: 'center', rowGap: 30 }}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://www.zarla.com/images/zarla-el-dente-1x1-2400x2400-20220318-4rd9m7m9hjq7t63mhp8r.png?crop=1:1,smart&width=250&dpr=2',
        }}
      />
      <KeyboardAwareScrollView style={styles.form} showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.form_group}>
          <Text style={styles.form_group_label}>Nombre</Text>
          <Controller
            control={control}
            rules={{ required: { value: true, message: 'Este campo es requerido' } }}
            name="fullname"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.form_group_input}
                placeholder="Jhon Doe"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.fullname && <Text style={styles.text_error}>{errors.fullname.message}</Text>}
        </View>
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
                textContentType="emailAddress"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.email && <Text style={styles.text_error}>{errors.email.message}</Text>}
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
        <TouchableOpacity style={styles.form_button} onPress={handleSubmit(onRegister)}>
          <Text style={styles.form_button_text}>Registrate</Text>
        </TouchableOpacity>
        <View style={styles.options}>
          <Text style={styles.options_text} onPress={() => navigation.navigate('Auth', { screen: 'Login' })}>
            ¿Tienes cuenta? Inicia sesion
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
