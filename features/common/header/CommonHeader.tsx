import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { Icon } from '@rneui/themed';
import { Image } from '@rneui/themed';
import { useState } from 'react';
import Menu from './menu/Menu';

const headerStyle = StyleSheet.create({
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    padding: 20,
    height: 64,
    backgroundColor: 'white'
  },
  navigation: {
    flexDirection: 'row', 
    alignItems: 'center',
  }
})

const CommonHeader = () => {

  const { header, navigation } = headerStyle
  const window = useWindowDimensions();
  const screenWidth = window.width            // SafeAreaView에 의해 조정된 실제 화면 너비
  const imageWidth = screenWidth * 0.6
  const imageHeight = imageWidth / 12.8787    // =>> 이미지 원래 크기 425 / 33 = 12.8787


  const [ isMenuVisible, setIsMenuVisible ] = useState(false)

  const iconName = isMenuVisible ? 'chevron-up' : 'chevron-down'

  const clickMenuIcon = () => setIsMenuVisible(prev => !prev)

  return (
    <>
      <View style={ header }>
        <View style={ navigation }>
          <Image 
            resizeMode='contain'
            source={ require('../../../assets/images/header-logo.png') } alt='header logo' 
            style={{ width: imageWidth, height: imageHeight, marginRight: 10 }}
          />
          <Icon name={ iconName } type='font-awesome' onPress={ clickMenuIcon } />
        </View>
        <View>
          <Icon name='search' type='font-awesome' />
        </View>
      </View>
      { isMenuVisible && <Menu setIsVisible={ setIsMenuVisible } /> }
    </>
  )
}

export default CommonHeader