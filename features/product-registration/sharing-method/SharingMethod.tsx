import { View, StyleSheet } from "react-native"
import SectionTitle from "../common/section-title/SectionTitle"
import Button from "../common/button/Button"

const sharingMethodStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 10
  }
})

const SharingMethod = () => {
  const style = sharingMethodStyle
  return (
    <>
      <SectionTitle>공유 수단을 선택하세요</SectionTitle>
      <View style={ style.container }>
        <Button 
          title='직접 공유' 
          isSelected fontSize={ 18 } 
          fontWeight='500' 
          padding={ 20 } 
          borderWidth={ 0 }
          containerStyle={{ flex: 1 }}
        />
        <Button 
          title='택배 이용'
          fontSize={ 18 } 
          fontWeight='500'
          padding={ 20 } 
          borderColor='#d9d9d9'
          borderWidth={ 1 } 
          containerStyle={{ flex: 1 }}
        />
      </View>
    </>
  )
}

export default SharingMethod