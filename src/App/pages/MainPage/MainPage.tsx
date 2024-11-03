import Text from '../../../components/Text'
import styles from './mainPage.module.scss';
import '../../../styles/styles.scss'
import MultiDropdown, {Option} from '../../../components/MultiDropdown';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../../components/Loader';
import Card from '../../../components/Card';


export const MainPage = () => {

  interface ICategory {
    id: number,
    name: string,
    image: string,
    creationAt: Date,
    updatedAt: Date
  }

  interface IData {
    id: number,
    title: string,
    price: number,
    description: string,
    images: string[],
    category: ICategory,
    creationAt: string,
    updatedAt: string

  }

  const [inputValue, setInputValue] = useState<string>('');
  const [data, setData] = useState<IData[]>([]);
 // const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetch = async () => {
      try {
      const result = await axios({
        method: 'get',
        url: 'https://api.escuelajs.co/api/v1/products'
      });

      setData(result.data.map((raw: IData)=> ({
        id: raw.id,
        title: raw.title, 
        price: raw.price,
        description: raw.description,
        images: raw.images,
        category: raw.category,
        creationAt: raw.creationAt,
        updatedAt: raw.updatedAt
      })))
    } catch(e) {
    console.error(e);
  } finally {
    setLoading(false);
  }
}
    fetch();
  }, []);

  console.log(data)
  
  return (
    <main>
      <div className='wrapper'>
        <div className={styles.mainPage__textBlock}>
          <Text view={'title'}>
            Products
          </Text>
          <Text view='p-20' color='secondary'>
            We display products based on the latest products 
            we have, if you want to see our old products please enter the name of the item
          </Text>
        </div>
        <div className={styles.main__search_and_filter}>
          <div className={styles.main__search_block}>
          <Input className={styles.main__search_block__input} placeholder='Search product' onChange={function (inputValue): void {setInputValue(inputValue) } } value={inputValue}></Input> 
          <Button>Find now</Button>  
          </div>
          <MultiDropdown className={styles.multiDropdown}
      options={[
          { key: 'msk', value: 'Москва' },
          { key: 'spb', value: 'Санкт-Петербург' },
          { key: 'ekb', value: 'Екатеринбург' }
      ]}
      value={[]}
      onChange={(value: Option[]) => value.map(function(el){ 
        console.log(el.key, el.value)
      })}
      getTitle={() => ''}
  />
        </div>
        <div className={styles.main__card_list}>

          {loading ? (
          <Loader size='l' />) : (
          <div className={styles.main__card_list__text_block}>  
            <Text view='title' className={styles.main__card_list__title_text}>Total Product</Text>
            <Text view='p-20' color='accent'>{data ? data.length : ''}</Text>
            </div>
          )}

          <div className={styles.main__card_list__grid}>
          {data.map(data => 
          <Card
          className={styles.main__card_list__grid__item}
          key={data.id} 
          image={data.images[0]} 
          captionSlot={data.category.name}
          title={data.title} 
          subtitle={data.description}
          contentSlot={`$${data.price}`}
          actionSlot={<Button>Add to Cart</Button>}
          >
          </Card>)}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
