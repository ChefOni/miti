import React from "react"
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native"

const DirectoryTab = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      className="flex-1 bg-[#F6F2EC]"
    >
      <View className="px-6 pt-8 pb-3">
        <Text className="font-['PlayfairDisplay'] text-[22px] text-[#2A2119] mb-1">
          Directory
        </Text>
        <Text className="font-['SpaceMono'] text-[12px] text-[#7A6A5A]">
          Browse herbs & your scanned history.
        </Text>
      </View>

      {/* Search bar */}
      <View className="px-6 mb-3">
        <View className="flex-row items-center bg-[#FFF9F0] rounded-2xl border border-[#D0C0AE] px-3.5 h-12">
          <Text className="font-['SpaceMono'] text-[16px] text-[#7A6A5A] mr-2">
            🔍
          </Text>
          <TextInput
            placeholder="Search for Zobo, Ginger..."
            placeholderTextColor="#A39380"
            className="flex-1 font-['SpaceMono'] text-[13px] text-[#2A2119]"
          />
        </View>
      </View>

      {/* Segmented control */}
      <View className="px-6 mb-3">
        <View className="flex-row bg-[#E3D6C6] rounded-full p-1">
          <View className="flex-1 h-[34px] rounded-full bg-[#F6F2EC] items-center justify-center">
            <Text className="font-['SpaceMono'] text-[12px] text-[#2A2119]">
              All Herbs
            </Text>
          </View>
          <View className="flex-1 h-[34px] rounded-full items-center justify-center">
            <Text className="font-['SpaceMono'] text-[12px] text-[#7A6A5A]">
              My Scanned
            </Text>
          </View>
        </View>
      </View>

      {/* Filter chips */}
      <View className="px-6 mb-2 flex-row flex-wrap">
        {[
          { label: "Safe for Kids", active: true },
          { label: "Pregnancy Safe", active: false },
        ].map((chip) => (
          <TouchableOpacity
            key={chip.label}
            className={`px-3 py-1.5 rounded-full border mr-2 mb-2 ${
              chip.active
                ? "bg-[#E4F0E4] border-[#4F7F4F]"
                : "bg-[#FFF9F0] border-[#D0C0AE]"
            }`}
          >
            <Text
              className={`font-['SpaceMono'] text-[11px] ${
                chip.active ? "text-[#4F7F4F]" : "text-[#7A6A5A]"
              }`}
            >
              {chip.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Herb list */}
      <View className="px-6 pt-3 pb-8">
        {[
          {
            name: "Hibiscus",
            latin: "Hibiscus sabdariffa",
            status: "Safe",
          },
          {
            name: "Ginger",
            latin: "Zingiber officinale",
            status: "Caution",
          },
          {
            name: "St. John’s Wort",
            latin: "Hypericum perforatum",
            status: "Avoid",
          },
        ].map((herb) => {
          let badgeBg = "#E4F0E4"
          let badgeText = "#2E5A2E"
          if (herb.status === "Caution") {
            badgeBg = "#FFF0D8"
            badgeText = "#A66C2D"
          }
          if (herb.status === "Avoid") {
            badgeBg = "#F9E0DD"
            badgeText = "#C75B39"
          }

          return (
            <View
              key={herb.name}
              className="flex-row items-center bg-white rounded-xl px-3.5 py-3 mb-2.5"
            >
              <View className="w-11 h-11 rounded-xl bg-[#EDE0D1] mr-3" />
              <View className="flex-1">
                <Text className="font-['PlayfairDisplay'] text-[16px] text-[#2A2119]">
                  {herb.name}
                </Text>
                <Text className="font-['SpaceMono'] text-[11px] text-[#7A6A5A] mt-0.5">
                  {herb.latin}
                </Text>
              </View>
              <View
                className="px-2.5 py-1 rounded-full"
                style={{ backgroundColor: badgeBg }}
              >
                <Text
                  className="font-['SpaceMono'] text-[11px]"
                  style={{ color: badgeText }}
                >
                  {herb.status}
                </Text>
              </View>
            </View>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default DirectoryTab