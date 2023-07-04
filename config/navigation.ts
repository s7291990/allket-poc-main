type RouteAndParam = {
  Home: undefined,
  ProductList: { testParam: string },
  ProductDetail: { productId: string },
  MyAllket: undefined,
  RequestedProductList: { productId: string },
  ExchangeRequestProductList: undefined
  ProductRegistration: undefined
}

const routeAndName = {
  'Home': '메인 화면',
  'ProductList': '상품 목록',
  'ProductDetail': '상품 상세',
  'MyAllket': '나의 올켓',
  'RequestedProductList': '신청받은 상품 목록',
  'ProductRegistration': '등록하기',
  'ExchangeRequestProductList': '교환신청 상품 목록'
}

const routeAndPath = {
  'Home': 'Home',
  'ProductList': 'ProductList',
  'ProductDetail': 'ProductDetail',
  'MyAllket': 'MyAllket',
  'RequestedProductList': 'RequestedProductList',
  'ProductRegistration': 'ProductRegistration',
  'ExchangeRequestProductList': 'ExchangeRequestProductList'
}

export { RouteAndParam, routeAndName, routeAndPath }