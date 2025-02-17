import Link from 'next/link';
import styles from "@/styles/Header.module.css";
const Header = () => {
    return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul  className={styles.navList} >
            <li><Link href="/">Página Inicial</Link></li>
            <li><Link href="/amigos">Amigos</Link></li>
            <li><Link href="/perfil">Perfil</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;