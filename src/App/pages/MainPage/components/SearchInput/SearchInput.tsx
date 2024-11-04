import { useState } from "react";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import s from './searchInput.module.scss';

export const SearchInput = () => {

    const [inputValue, setInputValue] = useState<string>('');

    
  return (
    <div className={s.search_block}>
            <Input
    className={s.search_block__input}
    placeholder='Search product'
    onChange={(value) => setInputValue(value)}
    value={inputValue}
  />
  <Button>Find now</Button>  
    </div>

  )
}

export default SearchInput;
