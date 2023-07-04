import { SafeAreaView } from 'react-native-safe-area-context';
import { RequestedProductList } from '@features/requested-product-list';

const ProductListPage = () => {
  return <SafeAreaView style={{ flex: 1 }}><RequestedProductList /></SafeAreaView>
}

export default ProductListPage