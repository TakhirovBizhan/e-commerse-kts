
import Text from '../../../../../components/Text'
import { useStores } from '../../../../../store/rootStoreContext';
import s from './ProductsCount.module.scss'


export const ProductsCount = () => {

  const { AllProductsStore } = useStores();

  return (

        <div className={s.text_block}>
          <Text view='min-title' weight='bold'>Total Product</Text>
          <Text view='p-20' color='accent'>{AllProductsStore.productsLength}</Text>
        </div>
  )
}

export default ProductsCount