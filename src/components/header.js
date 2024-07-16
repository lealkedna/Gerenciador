import Link from 'next/link';

const Header = () => {
    return (
      <header >
        <nav>
          <ul>
            <li><Link href="/">Página Inicial</Link></li>
            <li><Link href="/amigos">Amigos</Link></li>
            <li><Link href="/perfil">Perfil</Link></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;