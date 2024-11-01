import React from 'react';
import cn from 'classnames';
import CheckIcon from '../icons/CheckIcon';
import './CheckBox.css';

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (checked: boolean) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ 
  className,
  checked,
  disabled,
  onChange,
  ...props 
  }) => {
  const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      onChange(event.target.checked);
    }

  return (
    <label className={cn(className, 'checkbox', disabled && 'checkbox_disabled')}>
      <input
      className='checkbox__controller'
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        disabled={disabled}
        {...props}
      />
      <CheckIcon className='checkbox__check' width={40} height={40} />
    </label>
  );
};

export default CheckBox;
