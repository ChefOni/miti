import React from "react"
import { ScrollView, View, Text, TouchableOpacity } from "react-native"

const ProfileTab = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      className="flex-1 bg-[#F6F2EC]"
    >
      {/* Profile header */}
      <View className="bg-[#E3D6C6] rounded-b-[28px] px-6 pt-10 pb-6">
        <View className="w-14 h-14 rounded-full bg-[#F6F2EC] items-center justify-center mb-3">
          <Text className="font-['PlayfairDisplay'] text-[22px] text-[#2A2119]">
            T
          </Text>
        </View>
        <Text className="font-['PlayfairDisplay'] text-[22px] text-[#2A2119]">
          Tomiwa
        </Text>
        <Text className="font-['SpaceMono'] text-[12px] text-[#7A6A5A] mt-1">
          Herbal safety companion
        </Text>
        <View className="mt-2.5 self-start px-2.5 py-1 rounded-full bg-[#F6F2EC]">
          <Text className="font-['SpaceMono'] text-[11px] text-[#2A2119]">
            23 herbs scanned
          </Text>
        </View>
      </View>

      <View className="px-6 pt-6 pb-28">
        {/* My Medicine Cabinet */}
        <Text className="font-['PlayfairDisplay'] text-[18px] text-[#2A2119] mb-3">
          My Medicine Cabinet
        </Text>

        {["Ginger", "Hibiscus", "Moringa"].map((herb) => (
          <View
            key={herb}
            className="flex-row items-center bg-white rounded-xl px-3.5 py-3 mb-2.5"
          >
            <View className="w-10 h-10 rounded-xl bg-[#EDE0D1] mr-3" />
            <View className="flex-1">
              <Text className="font-['PlayfairDisplay'] text-[16px] text-[#2A2119]">
                {herb}
              </Text>
              <Text className="font-['SpaceMono'] text-[11px] text-[#7A6A5A] mt-0.5">
                Saved to your cabinet
              </Text>
            </View>
            <View className="px-2.5 py-1 rounded-full bg-[#E4F0E4]">
              <Text className="font-['SpaceMono'] text-[11px] text-[#2E5A2E]">
                Safe
              </Text>
            </View>
          </View>
        ))}

        {/* Medical Reports */}
        <Text className="font-['PlayfairDisplay'] text-[18px] text-[#2A2119] mt-6 mb-3">
          Medical Reports
        </Text>

        {[
          {
            title: "Ginger + Warfarin Check - Risk Found",
            date: "Reviewed on 12 Jan 2026",
            status: "Risk Found",
          },
          {
            title: "Hibiscus + Lisinopril Check - Safe",
            date: "Reviewed on 08 Jan 2026",
            status: "Safe",
          },
        ].map((report) => {
          const isRisk = report.status === "Risk Found"
          return (
            <View
              key={report.title}
              className="bg-white rounded-xl px-3.5 py-3 mb-2.5"
            >
              <View className="flex-row justify-between mb-1.5">
                <Text
                  className="flex-1 font-['SpaceMono'] text-[13px] text-[#2A2119]"
                  numberOfLines={2}
                >
                  {report.title}
                </Text>
                <View
                  className={`ml-2 px-2.5 py-1 rounded-full ${
                    isRisk ? "bg-[#F9E0DD]" : "bg-[#E4F0E4]"
                  }`}
                >
                  <Text
                    className={`font-['SpaceMono'] text-[11px] ${
                      isRisk ? "text-[#C75B39]" : "text-[#2E5A2E]"
                    }`}
                  >
                    {report.status}
                  </Text>
                </View>
              </View>
              <Text className="font-['SpaceMono'] text-[11px] text-[#7A6A5A]">
                {report.date}
              </Text>
            </View>
          )
        })}
      </View>

      {/* Sticky bottom button */}
      <View className="absolute left-6 right-6 bottom-6">
        <TouchableOpacity className="h-[52px] rounded-2xl bg-[#2A2119] items-center justify-center flex-row">
          <Text className="font-['SpaceMono'] text-[13px] text-[#F6F2EC]">
            Download PDF for Doctor
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ProfileTab