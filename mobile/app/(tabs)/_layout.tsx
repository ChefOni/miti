import { Ionicons, Feather } from "@expo/vector-icons"
import { Tabs } from "expo-router"

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#F6F2EC",
          paddingTop: 6,
          paddingBottom: 8,
          height: 68,
          borderTopWidth: 1,
          borderTopColor: "#D0C0AE",
        },
        tabBarActiveTintColor: "#2A2119",
        tabBarInactiveTintColor: "#7A6A5A",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          fontFamily: "SpaceMono",
        },

      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Discover",
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

      <Tabs.Screen
        name="directory"
        options={{
          title: "Directory",
          tabBarIcon: ({ focused, color, size }) => (
            <Feather
              name="feather"
              size={size}
              color={color}
            />
          )
        }} />

      <Tabs.Screen
        name="snap"
        options={{
          title: "Snap",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "camera" : "camera-outline"}
              size={size}
              color={color}
            />
          )
        }}
      />


    </Tabs>
  )
}

export default TabsLayout