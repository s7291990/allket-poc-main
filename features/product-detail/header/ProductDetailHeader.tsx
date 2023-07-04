import { HeaderWithBackButton, Icon as IconType } from '@features/common/header';

const icons: IconType[] = [{ iconName: 'share-alt' }, { iconName: 'heart' }]
const ProductDetailHeader = () => <HeaderWithBackButton title='공유하기' icons={ icons } /> 

export default ProductDetailHeader