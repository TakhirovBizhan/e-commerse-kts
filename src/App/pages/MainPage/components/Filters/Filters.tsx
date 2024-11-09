
import { useState } from 'react';
import MultiDropdown, { Option } from '../../../../../components/MultiDropdown';
import { useCategories } from '../../../../../config/api';
import s from './filters.module.scss';


export const Filters = () => {
  const { data } = useCategories();
  const [filterValue, setFilterValue] = useState<Option[]>([]);

  const options: Option[] = data.map((category) => ({
    key: `${category.id}`,
    value: category.name,
  }));

  return (
    <MultiDropdown
      className={s.multiDropdown}
      options={options}
      value={filterValue}
      onChange={setFilterValue}
      getTitle={(value) => (value.length === 0? 'Select filters' : value.map((option) => option.value).join(', '))}
    />
  );
};

export default Filters;
