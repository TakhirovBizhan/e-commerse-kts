
import Text from '../../../../../components/Text'
import s from './ProductsCount.module.scss'

interface TotalProductsProps {
    dataLength: number
  }

export const ProductsCount: React.FC<TotalProductsProps>= ({dataLength}) => {

  return (

        <div className={s.text_block}>
          <Text view='min-title' weight='bold'>Total Product</Text>
          <Text view='p-20' color='accent'>{dataLength}</Text>
        </div>
  )
}

export default ProductsCount