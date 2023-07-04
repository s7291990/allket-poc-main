import { Image, Text } from "@rneui/themed";
import { StyleSheet, View, useWindowDimensions } from "react-native";

const myImageStyle = StyleSheet.create({ 
  nickname: { 
    padding: 20,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    // backgroundColor: '#f1f1f1'
  }
})

const MyImage = () => {
  const { nickname } = myImageStyle
  const window = useWindowDimensions();
  const screenWidth = window.width            // SafeAreaView에 의해 조정된 실제 화면 너비
  const imageWidth = screenWidth / 2
  const imageHeight = imageWidth / 1.5756302  // =>> 이미지 원래 크기 750 / 476 = 1.5756302

  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={ require('@assets/images/toaster.png') } 
        alt='toaster image'
        style={{ width: imageWidth, height: imageHeight }}
        resizeMode='cover'
      />
      <Text style={ nickname }>닉네임</Text>
    </View>
  )
}

export default MyImage