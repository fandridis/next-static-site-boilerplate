import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

interface HeaderProps {
  logoTitle: string
}

Header.defaultProps = {
  logoTitle: 'LOGO HERE'
}

const links = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Blog', url: '/blog' },
  { name: 'Contact', url: '/contact' }
]

function Header(props: React.PropsWithChildren<HeaderProps>) {
  const router = useRouter();

  return (
    <header className={styles.headerContainer}>
      <nav>
        <div className={styles.logoContainer}>
          {props.logoTitle}
        </div>
        <div className={styles.linksContainer}>
          {links.map(link => (
            <Link key={link.name} href={link.url}>
              <a className={router.pathname === link.url ? styles.active : styles.inactive}>
                {link.name}
              </a>
            </Link>
          )
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header;