import React from "react"
import { ScrollView, View, Text, TouchableOpacity } from "react-native"

const DiscoverTab = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      className="flex-1 bg-[#F6F2EC]"
    >
      <View className="px-6 pt-8 pb-4">
        <Text className="font-['SpaceMono'] text-[12px] tracking-[1px] uppercase text-[#7A6A5A] mb-1">
          Today
        </Text>
        <Text className="font-['PlayfairDisplay'] text-[28px] text-[#2A2119]">
          Good Morning, Tomiwa
        </Text>
        <Text className="font-['SpaceMono'] text-[13px] text-[#8F7F6C] mt-2">
          Let’s explore your natural remedies.
        </Text>
      </View>

      {/* Daily Wisdom card */}
      <View className="mx-6 bg-[#E3D6C6] rounded-2xl p-5 flex-row items-center">
        <View className="flex-1 pr-3">
          <Text className="font-['SpaceMono'] text-[11px] tracking-[1px] uppercase text-[#7A6A5A] mb-1.5">
            Daily Wisdom
          </Text>
          <Text className="font-['PlayfairDisplay'] text-[18px] text-[#2A2119] mb-1">
            Did You Know?
          </Text>
          <Text className="font-['SpaceMono'] text-[13px] text-[#4A3B2D]">
            Moringa has 7x the Vitamin C of oranges.
          </Text>
        </View>
        <View className="w-14 h-14 rounded-2xl bg-[#F6F2EC] items-center justify-center">
          {/* Placeholder leaf icon shape */}
          <View className="w-6 h-6 rounded-full bg-[#4F7F4F] opacity-90" />
        </View>
      </View>

      {/* Trending Now */}
      <View className="mt-6 px-6">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="font-['PlayfairDisplay'] text-[18px] text-[#2A2119]">
            Trending Now
          </Text>
          <Text className="font-['SpaceMono'] text-[12px] text-[#7A6A5A]">
            See all
          </Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="px-6 pb-4"
      >
        {["Moringa", "Ginger", "Hibiscus", "Turmeric"].map((herb, index) => (
          <View
            key={herb}
            className={`w-40 bg-[#FFF9F0] rounded-xl p-3 ${
              index === 3 ? "" : "mr-3"
            }`}
          >
            <View className="rounded-xl bg-[#EDE0D1] h-24 mb-2.5 overflow-hidden">
              {/* Placeholder image block */}
              <View className="w-full h-full bg-gray-200" />
            </View>
            <Text className="font-['PlayfairDisplay'] text-[15px] text-[#2A2119] mb-1">
              {herb}
            </Text>
            <View className="flex-row space-x-1.5">
              <View className="px-2 py-1 rounded-full bg-[#E4F0E4]">
                <Text className="font-['SpaceMono'] text-[10px] text-[#4F7F4F]">
                  Immunity
                </Text>
              </View>
              <View className="px-2 py-1 rounded-full bg-[#FFF0D8]">
                <Text className="font-['SpaceMono'] text-[10px] text-[#A66C2D]">
                  Energy
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Action buttons */}
      <View className="flex-row px-6 pt-2 pb-8 space-x-3">
        <TouchableOpacity className="flex-1 bg-[#2A2119] rounded-2xl h-14 items-center justify-center">
          <Text className="font-['SpaceMono'] text-[13px] text-[#F6F2EC]">
            Check Safety
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 bg-[#4F7F4F] rounded-2xl h-14 items-center justify-center">
          <Text className="font-['SpaceMono'] text-[13px] text-[#F6F2EC]">
            Scan New Herb
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default DiscoverTab