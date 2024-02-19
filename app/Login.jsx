// LoginScreen.js
import React, { useState } from 'react';
import { COLORS, icons } from '../constants';
import { Link, useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../app/Redux/Slices/userSlice.js';
import { setCreditionals } from '../app/Redux/Slices/AuthSlice';
import { errorToast, successToast } from '../utils/Toast.jsx';

const Login = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  const validationLoginSchema = Yup.object({
    email: Yup.string().required('Email is required').email('Enter a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationLoginSchema,
    onSubmit: async (values) => {
      try {
        const res = await login(values).unwrap();
        dispatch(setCreditionals({ ...res }));
        successToast('Login done successfully!');
        router.replace('/profile');
      } catch (error) {
        console.log(error);
        errorToast('Username or password incorrect');
      }
    },
  });

  const handleLogin = () => {
    router.replace('/login')  
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={icons.companyLogo} 
                resizeMode='cover'
                style={{ width: 200, height: 200 }}/>
      </View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        onBlur={formik.handleBlur('email')}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
        placeholder="Enter your email"
        style={styles.input}
      />
      <Text style={styles.errorText}>{formik.touched.email && formik.errors.email}</Text>

      <TextInput
        onBlur={formik.handleBlur('password')}
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        placeholder="Enter your password"
        secureTextEntry
        style={styles.input}
      />
      <Text style={styles.errorText}>{formik.touched.password && formik.errors.password}</Text>


      <TouchableOpacity style={styles.Button} onPress={formik.handleSubmit}>
        login
      </TouchableOpacity>

      <Link href='/Register'>
        <Text style={styles.Register}>Join us now</Text>
      </Link>
   
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.darkTheme,
  },
  title: {
    fontSize: 24,
    color: COLORS.white,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderWidth: 1, 
    borderColor: 'white', 
    borderRadius: 20,
    borderRadius: 20,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%',
    color: COLORS.white,
  },
  Button: {
    padding:"10px",
    borderRadius: 20,
    marginBottom: 16,
    textAlign: 'center',
    width: '100px',
    backgroundColor: COLORS.lightTheme,
    color: COLORS.white,
  },
  Register:{
    color: COLORS.white,
  },
  errorText:{
    color: "red",
    padding: "10px",
    fontSize: 12,
    textAlign: 'center',
  }
});

export default Login;
