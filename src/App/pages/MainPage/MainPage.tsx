import Text from '../../../components/Text';
import s from './mainPage.module.scss';
import '../../../styles/styles.scss';
import SearchInput from './components/SearchInput/SearchInput';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import { useProducts } from '../../../config/api'
import ProductsCount from './components/ProductsCount';



export const MainPage = () => {
  const { data, loading } = useProducts();

  return (
    <main className={s.root}>
      <div className='wrapper'>
        <div className={s.root__text_block}>
          <Text view={'title'}>Products</Text>
          <Text view='p-20' color='secondary'>
            We display products based on the latest products
            we have, if you want to see our old products please enter the name of the item
          </Text>
        </div>
        <div className={s.root__search_block}>
          <SearchInput></SearchInput>
          <Filters></Filters>
        </div>
        <div className={s.root__pagination_block}>
          <ProductsCount dataLength={data.length} loading={loading} />
          <Pagination data={data}></Pagination>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
