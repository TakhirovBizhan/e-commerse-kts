import Text from '../../../components/Text';
import s from './mainPage.module.scss';
import '../../../styles/styles.scss';
import SearchInput from './components/SearchInput/SearchInput';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import ProductsCount from './components/ProductsCount';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import Loader from '../../../components/Loader';
import { useStores } from '../../../store/rootStoreContext';



export const MainPage = observer(() => {
  const { AllProducts} = useStores;

  useEffect(() => {
    AllProductsStore.getProductsAction();
  }, [getProductsAction]);

  if (AllProductsStore.allProducts === undefined) {
    return null;
  }
  return AllProductsStore.allProducts.case({
    pending: ()=> <><Loader/></>,
    rejected: () => <div>error</div>,
    fulfilled: () =>
    <>
      <main className={s.root}>
        <div className='wrapper'>
          <div className={s.root__text_block}>
            <Text view={'title'}>Products</Text>
            <Text view='p-20' color='secondary'>
              We display products based on the latest products we have. If you want to see our old products, please enter the name of the item.
            </Text>
          </div>
          <div className={s.root__search_block}>
            <SearchInput />
            <Filters />
          </div>
          
            <div>
                There was an error loading the products. Please try again later.
            </div>
            <div className={s.root__pagination_block}>
              <ProductsCount dataLength={allProducts.value.length} />
              <Pagination data={allProducts?.value} />
            </div>
        </div>
      </main>
    </>
});

});

export default MainPage;
