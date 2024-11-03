import Text from '../../../components/Text'
import styles from './mainPage.module.scss';
import '../../../styles/styles.scss'
import MultiDropdown, {Option} from '../../../components/MultiDropdown';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { useState } from 'react';

export const MainPage = () => {

  const [inputValue, setInputValue] = useState('');
  
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
      </div>
    </main>
  );
};

export default MainPage;
