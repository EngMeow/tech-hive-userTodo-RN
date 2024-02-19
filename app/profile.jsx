import { View, Text, Image, TouchableOpacity } from 'react-native';
import { icons } from '../constants';
import { useDispatch } from 'react-redux';
import { setCreditionals } from '../app/Redux/Slices/AuthSlice';
import { useEffect, useState } from 'react';
import { useGetMyProfileMutation } from './Redux/Slices/candidateSlice.js';
import { useLogoutMutation } from './Redux/Slices/userSlice';
import { useRouter } from 'expo-router';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function profile() {
    const [ myProfile , setMyProfile ] = useState('')
    const dispatch = useDispatch();
    const [getMyProfile] = useGetMyProfileMutation();
    const [logout] = useLogoutMutation();
    const router = useRouter()

    const handleLogout = async () => {
        try {
          const response = await logout();
    
          if (response.error) {
            console.error('Logout failed:', response.error);
            Alert.alert('Logout Failed', 'An error occurred during logout. Please try again.');
            return;
          }
        //   await AsyncStorage.clear();
          router.replace('/Login')
        } catch (error) {
          // Handle unexpected errors
          console.error('Unexpected error during logout:', error);
          Alert.alert('Error', 'An unexpected error occurred. Please try again.');
        }
      };
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getMyProfile();
            setMyProfile(response.data.user); 
            dispatch(setCreditionals({ ...response.data.user }));
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []);
    
      console.log(myProfile);

    console.log(myProfile.data);

  return (
    <View>
      <View
        style={{
          backgroundColor: '#6F0599', 
          alignItems: 'center',
        }}
      >
        {/* Cover Image */}
        <View style={{ marginVertical: 20 }}>
          
        </View>
      </View>

      <View style={{ flexDirection: 'column', backgroundColor: 'white' }}>
        <View
          style={{
            margin: "auto",
            width: 120,
            height: 120,
            borderWidth: 4,
            borderRadius: 60,
            overflow: 'hidden',
            borderColor: 'white',
          }}
        >
          {/* Profile Image */}
          <Image
            source={icons.profile}
            style={{ width: 120, height: 120 }}
            resizeMode='cover'
            />
        </View>
        <View style={{ alignItems: 'center', marginTop: 20, marginLeft: 10 }}>
          {/* User Name */}
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginVertical: 5 }}>
            {myProfile.firstName} {myProfile.lastName}
          </Text>
          <Text style={{ fontSize: 14, marginVertical: 5 }}>{myProfile.email}</Text>

        </View>
      </View>

      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 20,
          borderRadius: 20,
          padding: 10,
          backgroundColor: 'white',
        }}
      >
        <View style={{ paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#6F0599',
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
              padding: 10,
            }}
          >
            <Text style={{ color: 'white', fontSize: 12 }}>Edit company profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#6F0599',
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
              padding:10,
            }}
            onPress={handleLogout}

          >
            <Text style={{ color: 'white', fontSize: 12 }}>Logout</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontSize: 14 }}>Location:</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Egypt</Text>
          </View>

          <View>
            <Text style={{ fontSize: 14 }}>Foundation year:</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>2009</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ fontSize: 14 }}>Industry:</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Software development</Text>
          </View>

          <View>
            <Text style={{ fontSize: 14 }}>Specialities:</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>IT Services</Text>
          </View>
        </View>

      </View>
    </View>
  );
}
