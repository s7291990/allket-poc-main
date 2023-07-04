import { HeaderWithBackButton } from '@features/common'
import { useNavigation } from '@react-navigation/native'
import { routeAndPath } from 'config'
import { ScrollView, View } from 'react-native'
import Divider from './common/divider/Divider'
import SharingType from './sharing-type/SharingType'
import SharingMethod from './sharing-method/SharingMethod'
import SharingDistance from './sharing-distance/SharingDistance'
import SharingPeriod from './sharing-period/SharingPeriod'
import UnusedResource from './unused-resource/UnusedResource'


const ProductRegistration = () => {

  const PADDING = 20
  const navigation = useNavigation()
  
  return (
    <View style={{ flex: 1 }}>
      <HeaderWithBackButton 
        title='등록하기'
        icons={ [{ iconName: 'home', onPress: () => navigation.navigate(routeAndPath.Home) }] }
      />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: PADDING }}><SharingType /></View>
        <Divider />

        <View style={{ padding: PADDING }}><SharingMethod /></View>
        <Divider />

        <View style={{ padding: PADDING }}><SharingDistance /></View>
        <Divider />

        <View style={{ padding: PADDING }}><SharingPeriod /></View>
        <Divider />

        <View style={{ padding: PADDING }}><UnusedResource /></View>
        <Divider />

      </ScrollView>
    </View>
  )
}

export default ProductRegistration