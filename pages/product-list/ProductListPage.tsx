import { CommonHeader } from '@features/common/header';
import { ProductList } from '@features/product-list';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductListPage = () => {
  return <SafeAreaView style={{ flex: 1 }}><CommonHeader /><ProductList /></SafeAreaView>
}

export default ProductListPage