import Product from "./product/Product"
import Tab from "./tab/Tab"
import { ScrollView, View } from 'react-native'

const ProductList = () => {

  return (
    <View style={{ flex: 1 }}>
      <Tab />
      <ScrollView style={{ flex: 1 }}>
        {
          Array.from(Array(3)).map((_, idx) => <Product key={ idx } />)
        }
      </ScrollView>
    </View>
  )
}

export default ProductList