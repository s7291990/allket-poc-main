import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { RouteAndParam } from './config';
import { ExchangeRequestProductListPage, HomePage, MyAllketPage, ProductDetailPage, ProductListPage, RequestedProductListPage, ProductRegistrationPage } from './pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PushNotifiactionsContainer } from '@features/common';

const { Navigator, Screen } = createNativeStackNavigator<RouteAndParam>()

export default function App() {

  return (
    <NavigationContainer>
      <PushNotifiactionsContainer>
        <Navigator 
          initialRouteName='Home' 
          screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'white' }}}
        >
          <Screen name='Home' component={ HomePage } />
          <Screen name='ProductList' component={ ProductListPage } initialParams={{ testParam: 'test' }} />
          <Screen name='ProductDetail' component={ ProductDetailPage } />
          <Screen name='RequestedProductList' component={ RequestedProductListPage } />
          <Screen name='MyAllket' component={ MyAllketPage } />
          <Screen name='ProductRegistration' component={ ProductRegistrationPage } />
          <Screen name='ExchangeRequestProductList' component={ ExchangeRequestProductListPage } />
        </Navigator>
        <StatusBar style="auto" />
      </PushNotifiactionsContainer>
    </NavigationContainer>
  );
}