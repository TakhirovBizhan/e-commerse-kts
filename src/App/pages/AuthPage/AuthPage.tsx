import { useForm } from 'react-hook-form';
import s from './AuthPage.module.scss';
import Text from '../../../components/Text';
import { useState } from 'react';
import Button from '../../../components/Button';

function AuthPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
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
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        {authIs === 'register' ? (
          <label htmlFor="username">
            Full name
            <input {...register('username', { required: 'Name required' })} />
          </label>
        ) : (
          ''
        )}
        {typeof errors.username?.message === 'string' && <p>{errors.username.message}</p>}
        <label htmlFor="email">
          Email
          <input {...register('email', { required: 'Email required' })} />
        </label>
        {typeof errors.email?.message === 'string' && <p>{errors.email.message}</p>}
        <label htmlFor="password">
          Password
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password', { required: 'Password required' })}
          />
        </label>
        {typeof errors.password?.message === 'string' && <p>{errors.password.message}</p>}
        <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? 'Скрыть' : 'Показать'}
        </button>
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
