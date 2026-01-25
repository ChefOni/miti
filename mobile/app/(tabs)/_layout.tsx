import { Ionicons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F1F1F1",
          paddingTop: 8,
          height: 66,
          borderTopWidth: 1,
        },
        tabBarActiveTintColor: "#2A2119",
        tabBarInactiveTintColor: "#2A2119",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 600,
        },

      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          )
        }}
      />


      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          )
        }} />


    </Tabs>
  )
}

export default TabsLayout