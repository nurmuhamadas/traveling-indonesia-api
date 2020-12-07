import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from '../styles/navbar.module.css';
import SocialIcon from '../components/SocialIcon';
import cn from 'classname';
import 'primeicons/primeicons.css';
import {useEffect, useState} from 'react';

const NavbarComponent = () => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState(router.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    router.events.on('routeChangeComplete', (path) => setCurrentRoute(path));
    window.addEventListener('load', handleWindowResize);
    window.addEventListener('resize', handleWindowResize);
  }, [menuOpen]);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 992) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header id={styles.header} className={cn({[styles.show_menu]: menuOpen})}>
      <div id={styles.navbar}>
        <h3 className={styles.brand}>
          <Link href="/">Traveling Indonesia</Link>
        </h3>
        <nav className={cn(styles.nav, {[styles.show_menu]: menuOpen})}>
          <Link href="/">
            <a className={cn(
                styles.nav__item,
                {[styles.active]: currentRoute === '/'},
            )}>
            Home
            </a>
          </Link>
          <Link href="/docs">
            <a className={cn(
                styles.nav__item,
                {[styles.active]: currentRoute.includes('/docs')},
            )}>
            Documentation
            </a>
          </Link>
          <Link href="/contributing">
            <a className={cn(
                styles.nav__item,
                {[styles.active]: currentRoute === '/contributing'},
            )}>
            Contributing
            </a>
          </Link>
          <Link href="/about">
            <a className={cn(
                styles.nav__item,
                {[styles.active]: currentRoute === '/about'},
            )}>
            About
            </a>
          </Link>
        </nav>
        <div className={cn(
            styles.social__icon,
            {[styles.show_menu]: menuOpen},
        )}>
          <SocialIcon />
        </div>
      </div>
      <button className={styles.toggle__button} onClick={handleMenuClick}>
        <i className="pi pi-bars"></i>
      </button>
    </header>
  );
};

export default NavbarComponent;
