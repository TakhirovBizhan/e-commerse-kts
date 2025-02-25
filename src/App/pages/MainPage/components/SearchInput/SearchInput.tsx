import { useEffect, useState } from 'react';
import Input from '../../../../../components/Input';
import Button from '../../../../../components/Button';
import s from './searchInput.module.scss';
import useDebounce from '../../../../../hooks/UseDebounce';

export const SearchInput = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const debouncedSearchTerm = useDebounce(inputValue, 600);

  const handleSearch = () => {
    console.log('searching for', inputValue);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearch();
    }
  }, [debouncedSearchTerm]);

  return (
    <div className={s.search_block}>
      <Input
        className={s.search_block__input}
        placeholder="Search product"
        onChange={(value) => setInputValue(value)}
        value={inputValue}
      />
      <Button>Find now</Button>
    </div>
  );
};

export default SearchInput;
