import { NavLink, Link } from 'react-router-dom';
import Text from '../Text';
import bagSvg from '../../../public/bag.svg';
import userSvg from '../../../public/user.svg';
import logoSvg from '../../../public/logo.svg'
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>

      <Link to='/main'><img className={styles.header__logo} src={logoSvg} alt="Логотип" /></Link>
      <nav className={styles.header__nav}>
        <NavLink to="/main"><Text view={'p-18'} color='primary' className={styles.header__nav__link}>Products</Text></NavLink>
        <NavLink to="/Categories"><Text view={'p-18'} color='primary' className={styles.header__nav__link}>Categories</Text></NavLink>
        <NavLink to="/About_us"><Text view={'p-18'} color='primary' className={styles.header__nav__link}>About us</Text></NavLink>
      </nav>
      <div className={styles.header__icons_block}>
        <img src={bagSvg} alt="корзина" />
        <img src={userSvg} alt="Профиль" />
        </div>
      </div>
    </header>
  );
};
