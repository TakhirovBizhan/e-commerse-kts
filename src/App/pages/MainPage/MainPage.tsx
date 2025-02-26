import Text from '../../../components/Text';
import s from './mainPage.module.scss';
import '../../../styles/styles.scss';
import SearchInput from './components/SearchInput/SearchInput';
import Filters from './components/Filters';
import Pagination from './components/Pagination';
import ProductsCount from './components/ProductsCount';
import { useGetAllProductsQuery } from '../../../store/api/Products.api';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

export const MainPage = () => {
  const search = useSelector((state: RootState) => state.productUrl.search);
  const { data, isLoading } = useGetAllProductsQuery({ search });

  return (
    <main className={s.root}>
      <div className={s.wrapper}>
        <div className={s.root__text_block}>
          <Text view="title">Products</Text>
          <Text view="p-20">
            We display products based on the latest products we have, if you want to see our old products please enter
            the name of the item
          </Text>
        </div>
        <div className={s.root__search_block}>
          <SearchInput></SearchInput>
          <Filters></Filters>
        </div>
        <div className={s.root__pagination_block}>
          {data ? (
            <>
              <ProductsCount dataLength={data.length} loading={isLoading} />
              <Pagination pageCount={data.length}></Pagination>
            </>
          ) : (
            <div>no data</div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MainPage;
