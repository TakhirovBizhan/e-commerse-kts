import { NavLink, Link } from 'react-router-dom';
import Text from '../Text';
import bagSvg from '../../../public/bag.svg';
import userSvg from '../../../public/user.svg';
import logoSvg from '../../../public/favicon.svg';
import burgerSvg from '../../../public/burger.svg';
import styles from './Header.module.scss';
import { ThemeToggle } from '../ThemeButton/ThemeButton';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.logo_burger_block}>
          <button className={styles.burger_btn}>
            <img src={burgerSvg} alt="бургер-меню" />
          </button>
          <Link to="/main">
            <div className={styles.logo}>
              <img className={styles.header__logo} src={logoSvg} alt="Логотип" />
              <Text view="min-title" tag="h1" className={styles.title}>
                e-commerce
              </Text>
            </div>
          </Link>
        </div>
        <nav className={styles.header__nav}>
          <NavLink
            to="/main"
            className={({ isActive }) =>
              isActive ? `${styles.header__nav__link} ${styles.header__nav__link__active}` : styles.header__nav__link
            }
          >
            <Text view="p-18">Products</Text>
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? `${styles.header__nav__link} ${styles.header__nav__link__active}` : styles.header__nav__link
            }
          >
            <Text view="p-18"> Categories</Text>
          </NavLink>
          <NavLink
            to="/about_us"
            className={({ isActive }) =>
              isActive ? `${styles.header__nav__link} ${styles.header__nav__link__active}` : styles.header__nav__link
            }
          >
            <Text view="p-18">About us</Text>
          </NavLink>
        </nav>
        <div className={styles.header__icons_block}>
          <ThemeToggle />
          <Link to="/cart">
            <button className={styles.icon}>
              <img className={styles.img} src={bagSvg} alt="корзина" />
            </button>
          </Link>
          <Link to="/auth">
            <button className={styles.icon}>
              <img className={styles.img} src={userSvg} alt="Профиль" />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
