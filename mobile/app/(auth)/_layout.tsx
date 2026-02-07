import { Redirect } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const AuthLayout = () => {
  const isAuth = true;
  if (isAuth) return <Redirect href={{ pathname: "./(tabs)/" }} />
  return (
    <View className='mt-20'>
      <Text>Auth</Text>
    </View>
  )
}

export default AuthLayout