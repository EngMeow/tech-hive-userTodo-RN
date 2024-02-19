// RegisterScreen.js
import React, { useState } from 'react';
import { COLORS, icons } from '../constants';
import { Link, useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setCreditionals } from '../app/Redux/Slices/AuthSlice';
import { useRegisterMutation } from '../app/Redux/Slices/userSlice';
import { errorToast, successToast } from '../utils/Toast';

const Register = () => {
  const dispatch = useDispatch();
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter();

  // Define the password schema
  const passwordSchema = Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character'
    );

  const validationRegisterSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Enter a valid email address'),
    password: passwordSchema,
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: validationRegisterSchema,
    onSubmit: async (values) => {
      try {
        const res = await register(values).unwrap();
        dispatch(setCreditionals({ ...res }));
        successToast('Register done successfully!');
        router.replace('/Login')
      } catch (error) {
        console.error(error);
        errorToast('Something went wrong');
      }
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={icons.companyLogo} 
                resizeMode='cover'
                style={{ width: 200, height: 200 }}/>
      </View>
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>
          <TextInput
            onBlur={formik.handleBlur('firstName')}
            onChangeText={formik.handleChange('firstName')}
            value={formik.values.firstName}
            placeholder="Enter your first name"
            style={styles.input}
          />
          <Text style={styles.errorText}>
            {formik.touched.firstName && formik.errors.firstName}
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            onBlur={formik.handleBlur('lastName')}
            onChangeText={formik.handleChange('lastName')}
            value={formik.values.lastName}
            placeholder="Enter your last name"
            style={styles.input}
          />
          <Text style={styles.errorText}>
            {formik.touched.lastName && formik.errors.lastName}
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            onBlur={formik.handleBlur('email')}
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
            placeholder="Enter your email"
            style={styles.input}
          />
          <Text style={styles.errorText}>
            {formik.touched.email && formik.errors.email}
          </Text>
        </View>

        <View style={styles.inputContainer}>
            <TextInput
              onBlur={formik.handleBlur('password')}
              onChangeText={formik.handleChange('password')}
              value={formik.values.password}
              placeholder="Enter your password"
              secureTextEntry
              style={styles.input}
            />
            <Text style={styles.errorText}>
              {formik.touched.password && formik.errors.password}
            </Text>
          </View>

            <TouchableOpacity
            style={styles.Button}
            onPress={formik.handleSubmit}
            disabled={formik.isSubmitting}>
              <Text style={styles.buttonText}>
                {formik.isSubmitting ? 'Signing up...' : 'Sign up'}
              </Text>
            </TouchableOpacity>
           
            <Link href='/Login'>
              <Text style={styles.login}>you have Account ?</Text>
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
    border: '1px solid white',
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
  login:{
    color: COLORS.white,
  },
  errorText:{
    color: "red",
    padding: "10px",
    fontSize: 12,
    textAlign: 'center',
  }
});

export default Register;
