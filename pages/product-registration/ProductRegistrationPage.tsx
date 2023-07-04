import { ProductRegistration } from "@features/product-registration"
import { SafeAreaView } from "react-native-safe-area-context"

const ProductRegistrationPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}><ProductRegistration /></SafeAreaView>
  )
}

export default ProductRegistrationPage