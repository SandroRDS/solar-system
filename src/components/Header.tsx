import '../styles/Header.scss';
import elipse from '../images/elipse.svg';

function Header() {
  return (
    <header className="cabecalho">
      <h1>Sistema Solar</h1>
      <img src={ elipse } alt="" />
    </header>
  );
}

export default Header;
