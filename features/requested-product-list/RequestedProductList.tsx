import { ScrollView, View } from 'react-native'
import RequestedProduct from './requested-product/RequestedProduct'
import RequestedProductListHeader from './header/ReqeustedProductListHeader'

const RequestedProductList = () => {

  return (
    <View style={{ flex: 1 }}>
      <RequestedProductListHeader />
      <ScrollView style={{ flex: 1 }}>
        {
          Array.from(Array(3)).map((_, idx) => <RequestedProduct key={ idx } />)
        }
      </ScrollView>
    </View>
  )
}

export default RequestedProductList