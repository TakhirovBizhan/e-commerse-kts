import Text from '../../../components/Text';
import styles from './mainPage.module.scss';
import '../../../styles/styles.scss';
import SearchInput from './components/SearchInput/SearchInput';
import Filters from './components/Filters';
import Pagination from './components/Pagination';


export const MainPage = () => {

  return (
    <main className={styles.main}>
      <div className='wrapper'>
        <div className={styles.main__textBlock}>
          <Text view={'title'}>Products</Text>
          <Text view='p-20' color='secondary'>
            We display products based on the latest products 
            we have, if you want to see our old products please enter the name of the item
          </Text>
        </div>
        <div className={styles.main__search_and_filter}>
          <SearchInput></SearchInput>
          <Filters></Filters>
        </div>
        <Pagination></Pagination>
      </div>
    </main>
  );
};

export default MainPage;
