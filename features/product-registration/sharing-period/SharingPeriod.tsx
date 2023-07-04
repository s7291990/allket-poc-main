import { View, StyleSheet } from "react-native"
import SectionTitle from "../common/section-title/SectionTitle"
import Button from "../common/button/Button"

const sharingPeriodStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 10
  }
})

const SharingPeriod = () => {
  const style = sharingPeriodStyle
  return (
    <>
      <SectionTitle>공유 기간을 선택하세요</SectionTitle>
      <View style={ style.container }>
        <Button 
          title='1일' 
          isSelected fontSize={ 18 } 
          fontWeight='500' 
          padding={ 20 } 
          borderWidth={ 0 }
          containerStyle={{ flex: 1 }}
        />
        <Button 
          title='1주일'
          fontSize={ 18 } 
          fontWeight='500'
          padding={ 20 } 
          borderColor='#d9d9d9'
          borderWidth={ 1 } 
          containerStyle={{ flex: 1 }}
        />
        <Button 
          title='2주일'
          fontSize={ 18 } 
          fontWeight='500'
          padding={ 20 } 
          borderColor='#d9d9d9'
          borderWidth={ 1 } 
          containerStyle={{ flex: 1 }}
        />
        <Button 
          title='1개월'
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

export default SharingPeriod