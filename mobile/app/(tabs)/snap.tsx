import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Modal,
  Image,
} from "react-native"

const { width: SCREEN_WIDTH } = Dimensions.get("window")
const FRAME_SIZE = SCREEN_WIDTH * 0.7

const SnapTab = () => {
  const [showResult, setShowResult] = React.useState(true)

  return (
    <View className="flex-1 bg-black">
      {/* Camera preview placeholder */}
      <View className="flex-1 items-center justify-center">
        {/* Center guide frame */}
        <View
          style={{
            width: FRAME_SIZE,
            height: FRAME_SIZE,
            borderRadius: 12,
          }}
          className="border-2 border-[#D4E7D4]"
        />

        {/* Top helper text */}
        <View className="absolute top-16 left-0 right-0 items-center">
          <Text className="font-['SpaceMono'] text-[12px] text-white">
            Align the herb inside the frame
          </Text>
        </View>
      </View>

      {/* Bottom controls */}
      <View className="px-10 pt-4 pb-8 flex-row items-center justify-between bg-black/40">
        <TouchableOpacity className="w-9 h-9 rounded-full border border-[#F6F2EC] items-center justify-center">
          <Text className="text-[#F6F2EC]">↺</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowResult(true)}
          className="w-19 h-19 rounded-full border-[3px] border-[#E4F0E4] items-center justify-center"
        >
          <View className="w-[58px] h-[58px] rounded-full bg-[#4F7F4F]" />
        </TouchableOpacity>

        <TouchableOpacity className="w-9 h-9 rounded-full border border-[#F6F2EC] items-center justify-center">
          <Text className="text-[#F6F2EC]">?</Text>
        </TouchableOpacity>
      </View>

      {/* Result modal */}
      <Modal visible={showResult} transparent animationType="slide">
        <View className="flex-1 justify-end bg-black/40">
          <View className="bg-[#F6F2EC] rounded-t-3xl px-6 pt-5 pb-7">
            <View className="w-10 h-1 rounded-full bg-[#D0C0AE] self-center mb-4" />

            <View className="w-full h-40 rounded-2xl bg-[#EDE0D1] mb-3.5 overflow-hidden" />

            <View className="flex-row items-center mb-2.5">
              <Text className="font-['PlayfairDisplay'] text-[20px] text-[#2A2119] mr-2">
                Hibiscus sabdariffa
              </Text>
              <View className="px-2.5 py-1 rounded-full bg-[#E4F0E4]">
                <Text className="font-['SpaceMono'] text-[11px] text-[#2E5A2E]">
                  Safe
                </Text>
              </View>
            </View>

            <Text className="font-['SpaceMono'] text-[12px] text-[#7A6A5A] mb-4.5">
              Commonly used in Zobo; suitable for most adults. Check interactions
              before mixing with medications.
            </Text>

            <View className="flex-row space-x-3 mb-2.5">
              <TouchableOpacity className="flex-1 h-12 rounded-2xl bg-[#4F7F4F] items-center justify-center">
                <Text className="font-['SpaceMono'] text-[13px] text-[#F6F2EC]">
                  Add to Medicine Cabinet
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 h-12 rounded-2xl border border-[#2A2119] items-center justify-center">
                <Text className="font-['SpaceMono'] text-[13px] text-[#2A2119]">
                  View Details
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => setShowResult(false)}
              className="self-center mt-1"
            >
              <Text className="font-['SpaceMono'] text-[12px] text-[#7A6A5A]">
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default SnapTab