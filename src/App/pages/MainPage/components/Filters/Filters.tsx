import MultiDropdown, { Option } from '../../../../../components/MultiDropdown';
import s from './filters.module.scss';


export const Filters = () => {
  return (
    <MultiDropdown
    className={s.multiDropdown}
    options={[
      { key: 'msk', value: 'Москва' },
      { key: 'spb', value: 'Санкт-Петербург' },
      { key: 'ekb', value: 'Екатеринбург' }
    ]}
    value={[]}
    onChange={(value: Option[]) => value.map((el) => console.log(el.key, el.value))}
    getTitle={() => ''}
  />
  )
}

export default Filters;
