import { useState } from 'react';
import MultiDropdown, { Option } from '../../../../../components/MultiDropdown';
import s from './filters.module.scss';
import { useDispatch } from 'react-redux';
import { setMinPrice, setMaxPrice } from '../../../../../store/ProductUrlSlice';
import { setOrder } from '../../../../../store/CustomFiltersSlice';

export const Filters = () => {
  const [filter, setFilterState] = useState<Option[]>([]);
  const dispatch = useDispatch();
  return (
    <MultiDropdown
      className={s.multiDropdown}
      options={[
        { key: 'min=50_max=100', value: 'between 50$ and 100$' },
        { key: 'asc', value: 'price: from low to high' },
        { key: 'desc', value: 'price: from high to low' },
      ]}
      value={filter}
      onChange={(value: Option[]) => {
        setFilterState(value);

        if (value.length === 0) {
          dispatch(setMaxPrice(null));
          dispatch(setMinPrice(null));
          return;
        }

        let maxPriceSet = false;
        let minPriceSet = false;
        let orderSet = false;

        value.forEach((el) => {
          if (el.key === 'asc') {
            dispatch(setOrder('asc'));
            orderSet = true;
          }

          if (el.key === 'desc') {
            dispatch(setOrder('desc'));
            orderSet = true;
          }
          if (el.key === 'min=50_max=100') {
            const [minPart, maxPart] = el.key.split('_');
            const minPrice = Number(minPart.split('=')[1]);
            const maxPrice = Number(maxPart.split('=')[1]);
            dispatch(setMinPrice(minPrice));
            dispatch(setMaxPrice(maxPrice));
            maxPriceSet = true;
            minPriceSet = true;
          }
        });

        if (!orderSet) {
          dispatch(setOrder(null));
        }

        if (!maxPriceSet) dispatch(setMaxPrice(null));
        if (!minPriceSet) dispatch(setMinPrice(null));
      }}
      getTitle={() => (filter.length ? filter.map((el) => el.value).join(', ') : 'filters')}
    />
  );
};

export default Filters;
