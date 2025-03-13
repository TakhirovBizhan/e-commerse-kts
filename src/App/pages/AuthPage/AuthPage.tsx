import { useForm } from 'react-hook-form';
import s from './AuthPage.module.scss';
import Text from '../../../components/Text';
import { useState } from 'react';
import Button from '../../../components/Button';
import eyeIcon from '../../../../public/eyeIcon.svg';
import eyeIconOff from '../../../../public/eyeIconOff.svg';
import { registerForm } from '../../../config/DataInterfaces';

function AuthPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: registerForm) => {
    console.log(data);
  };

  type authType = 'register' | 'login';

  const [showPassword, setShowPassword] = useState(false);
  const [authIs, ToggleAuthIs] = useState<authType>('register');

  const toggle = () => {
    if (authIs == 'register') {
      ToggleAuthIs('login');
    } else {
      ToggleAuthIs('register');
    }
  };

  return (
    <fieldset className={s.fieldset}>
      <legend>
        <Text view="title" color="primary">
          {authIs == 'register' ? 'Registration' : 'Login'}
        </Text>
      </legend>
      <form noValidate className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {authIs === 'register' ? (
          <label htmlFor="name">
            Full name
            <input
              id="name"
              required
              {...register('name', {
                required: 'Name required',
              })}
            />
          </label>
        ) : (
          ''
        )}
        {typeof errors.username?.message === 'string' && <p>{errors.username.message}</p>}
        <label htmlFor="email">
          Email
          <input id="email" required type="email" {...register('email', { required: 'Email required' })} />
        </label>
        {typeof errors.email?.message === 'string' && <p>{errors.email.message}</p>}
        <label className={s.password_label} htmlFor="password">
          Password
          <input
            id="password"
            required
            className={s.password_input}
            minLength={6}
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
              required: 'Password required',
              minLength: { value: 6, message: '6 symbols mininmum' },
            })}
          />
          <img
            className={s.eye_icon}
            onClick={() => setShowPassword((prev) => !prev)}
            src={showPassword ? eyeIconOff : eyeIcon}
            alt="eye-icon"
          />
        </label>
        {typeof errors.password?.message === 'string' && <p>{errors.password.message}</p>}

        <Button className={s.submit_btn} type="submit">
          {authIs === 'register' ? 'register' : 'login'}
        </Button>
      </form>

      <button onClick={toggle} className={s.assign_link}>
        Have an account? Login here
      </button>
    </fieldset>
  );
}

export default AuthPage;
