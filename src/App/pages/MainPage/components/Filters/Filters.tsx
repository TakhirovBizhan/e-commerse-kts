import { useState } from 'react';
import MultiDropdown, { Option } from '../../../../../components/MultiDropdown';
import s from './filters.module.scss';

export const Filters = () => {
  const [filter, setFilter] = useState<Option[]>([]);

  return (
    <MultiDropdown
      className={s.multiDropdown}
      options={[
        { key: 'price_min=100', value: 'under a 100$' },
        { key: 'price_max', value: 'more than a 50$' },
      ]}
      value={filter}
      onChange={(value: Option[]) => setFilter(value.map((el) => el))}
      getTitle={() => (filter.length ? filter.map((el) => el.value).join(', ') : 'filters')}
    />
  );
};

export default Filters;
