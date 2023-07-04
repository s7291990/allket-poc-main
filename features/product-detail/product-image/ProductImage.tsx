import { useWindowDimensions } from 'react-native'
import { Image } from "@rneui/themed"

const ProductImage = () => {

  const window = useWindowDimensions();
  const screenWidth = window.width            // SafeAreaView에 의해 조정된 실제 화면 너비
  const imageWidth = screenWidth
  const imageHeight = imageWidth / 1.5756302  // =>> 이미지 원래 크기 750 / 476 = 1.5756302

  return (
    <Image 
      source={ require('@assets/images/toaster.png') } 
      alt='toaster image'
      style={{ width: imageWidth, height: imageHeight }}
      resizeMode='cover'
    />
  )
}

export default ProductImage