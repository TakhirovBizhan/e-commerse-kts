import { useEffect, useState } from 'react';
import Text from '../../../components/Text';
import styles from './mainPage.module.scss';
import '../../../styles/styles.scss';
import MultiDropdown, { Option } from '../../../components/MultiDropdown';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import axios from 'axios';
import Loader from '../../../components/Loader';
import Card from '../../../components/Card';
import leftArrow from '../../../../public/leftArrow.svg'
import rightArrow from '../../../../public/rightArrow.svg'
import { Link } from 'react-router-dom';


export const MainPage = () => {

  interface ICategory {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
  }

   interface IData {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: ICategory;
    creationAt: string;
    updatedAt: string;
  }

  const [inputValue, setInputValue] = useState<string>('');
  const [data, setData] = useState<IData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetch = async () => {
      try {
        const result = await axios.get('https://api.escuelajs.co/api/v1/products');
        setData(result.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handlePageClick = (page: number) => setCurrentPage(page);

  const renderPageButtons = () => {
    let buttons = [];
    if (totalPages <= 6) {
      buttons = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 3) {
        buttons = [1, 2, 3, '...', totalPages];
      } else if (currentPage > 3 && currentPage < totalPages - 2) {
        buttons = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
      } else {
        buttons = [1, '...', totalPages - 2, totalPages - 1, totalPages];
      }
    }

    return buttons;
  };

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
          <div className={styles.main__search_block}>
            <Input
              className={styles.main__search_block__input}
              placeholder='Search product'
              onChange={(value) => setInputValue(value)}
              value={inputValue}
            />
            <Button>Find now</Button>  
          </div>
          <MultiDropdown
            className={styles.multiDropdown}
            options={[
              { key: 'msk', value: 'Москва' },
              { key: 'spb', value: 'Санкт-Петербург' },
              { key: 'ekb', value: 'Екатеринбург' }
            ]}
            value={[]}
            onChange={(value: Option[]) => value.map((el) => console.log(el.key, el.value))}
            getTitle={() => ''}
          />
        </div>

        <div className={styles.main__card_list}>
          {loading ? (
            <Loader size='l' />
          ) : (
            <div className={styles.main__card_list__text_block}>
              <Text view='title' className={styles.main__card_list__title_text}>Total Product</Text>
              <Text view='p-20' color='accent'>{data.length}</Text>
            </div>
          )}

          <div className={styles.main__card_list__grid}>
            {currentData.map((product) => (
              <Link key={product.id} to={`/main/product/${product.id}`}>
              <Card
                className={styles.main__card_list__grid__item}
                image={product.images[0]}
                captionSlot={product.category.name}
                title={product.title}
                subtitle={product.description}
                contentSlot={`$${product.price}`}
                actionSlot={<Button><Text view='button'>Add to Cart</Text></Button>}
              />
              </Link>
            ))}
          </div>
          <div className={styles.pagination}>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            <img src={leftArrow} alt="previous page" />
            </button>
            {renderPageButtons().map((page, index) =>
            page === '...' ? (
              <span key={index} className={styles.ellipsis}>
                {page}
              </span>
            ) : (
              <button
                key={index}
                className={currentPage === page ? styles.active : ''}
                onClick={() => handlePageClick(page as number)}
              >
                {page}
              </button>
            )
          )}
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              <img src={rightArrow} alt="next page" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
