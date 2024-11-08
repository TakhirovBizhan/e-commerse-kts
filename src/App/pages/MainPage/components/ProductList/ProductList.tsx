import Button from '../../../../../components/Button';
import Card from '../../../../../components/Card';
import Text from '../../../../../components/Text';
import { Link } from 'react-router-dom';
import {IData} from '../../../../../config/DataInterfaces';
import s from './ProductList.module.scss'


interface ProductListProps {
    currentData: IData[];
}

export const ProductList: React.FC<ProductListProps> = ({currentData}) => {
  return (
    <div className={s.root}>
    {currentData.map((product) => (
      <Link key={product.id} to={`/main/product/${product.id}`}>
      <Card
        image={product.images[0].replace(/[[\]"'\\]/g, '')}
        captionSlot={product.category.name}
        title={product.title}
        subtitle={product.description}
        contentSlot={`$${product.price}`}
        actionSlot={<Button><Text view='button'>Add to Cart</Text></Button>}
      />
      </Link>
    ))}
  </div>
  )
}

export default ProductList;
