import Button from '../../../../../components/Button';
import Card from '../../../../../components/Card';
import Text from '../../../../../components/Text';
import { Link } from 'react-router-dom';
import s from './ProductList.module.scss';
import { useGetProductsQuery } from '../../../../../store/api/Products.api';

type ProductListProps = {
  page: number;
};

export const ProductList: React.FC<ProductListProps> = ({ page }) => {
  const { data, isLoading, error } = useGetProductsQuery({ page });

  return (
    <div className={s.root}>
      {isLoading ? (
        [...Array(9)].map((_, i) => <Card key={i} loading={true} />)
      ) : data ? (
        data.map((product) => (
          <Link key={product.id} to={`/main/product/${product.id}`}>
            <Card
              image={product.images[0].replace(/[[\]"'\\]/g, '')}
              captionSlot={product.category.name}
              title={product.title}
              subtitle={product.description}
              contentSlot={`$${product.price}`}
              actionSlot={
                <Button>
                  <Text view="button">Add to Cart</Text>
                </Button>
              }
            />
          </Link>
        ))
      ) : error ? (
        <Text view="p-20">Ooops... Some network errors.</Text>
      ) : null}
    </div>
  );
};

export default ProductList;
