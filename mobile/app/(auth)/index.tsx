import React, { useState } from 'react'
import {
  Alert,
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native'
// import { supabase } from '../../lib/supabase'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // async function signInWithEmail() {
  //   if (!email || !password) {
  //     Alert.alert('Error', 'Email and password are required')
  //     return
  //   }

  //   setLoading(true)

  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   })

  //   if (error) Alert.alert('Sign in failed', error.message)

  //   setLoading(false)
  // }

  // async function signUpWithEmail() {
  //   if (!email || !password) {
  //     Alert.alert('Error', 'Email and password are required')
  //     return
  //   }

  //   setLoading(true)

  //   const { data, error } = await supabase.auth.signUp({
  //     email,
  //     password,
  //   })

  //   if (error) {
  //     Alert.alert('Sign up failed', error.message)
  //   } else if (!data.session) {
  //     Alert.alert('Verify your email', 'Please check your inbox to confirm your email.')
  //   }

  //   setLoading(false)
  // }

  // return (
  //   <View className="mt-10 px-4">
  //     {/* Email */}
  //     <View className="mb-4">
  //       <Text className="mb-1 text-sm text-zinc-600">Email</Text>
  //       <TextInput
  //         className="rounded-lg border border-zinc-300 px-3 py-3 text-base"
  //         placeholder="email@address.com"
  //         autoCapitalize="none"
  //         keyboardType="email-address"
  //         value={email}
  //         onChangeText={setEmail}
  //       />
  //     </View>

  //     {/* Password */}
  //     <View className="mb-6">
  //       <Text className="mb-1 text-sm text-zinc-600">Password</Text>
  //       <TextInput
  //         className="rounded-lg border border-zinc-300 px-3 py-3 text-base"
  //         placeholder="Password"
  //         secureTextEntry
  //         autoCapitalize="none"
  //         value={password}
  //         onChangeText={setPassword}
  //       />
  //     </View>

  //     {/* Sign In */}
  //     <Pressable
  //       onPress={signInWithEmail}
  //       disabled={loading}
  //       className={`rounded-lg py-4 items-center ${
  //         loading ? 'bg-blue-400' : 'bg-blue-600'
  //       }`}
  //     >
  //       {loading ? (
  //         <ActivityIndicator color="#fff" />
  //       ) : (
  //         <Text className="text-white text-base font-semibold">
  //           Sign In
  //         </Text>
  //       )}
  //     </Pressable>

  //     {/* Sign Up */}
  //     <Pressable
  //       onPress={signUpWithEmail}
  //       disabled={loading}
  //       className="mt-3 rounded-lg py-4 items-center border border-blue-600"
  //     >
  //       <Text className="text-blue-600 text-base font-semibold">
  //         Sign Up
  //       </Text>
  //     </Pressable>
  //   </View>
  // )

  return (
    <View>
      <Text>Auth</Text>
    </View>
  )
}
