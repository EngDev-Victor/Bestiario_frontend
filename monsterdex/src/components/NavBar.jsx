import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        MONSTER<span>DEX</span>
      </div>

      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/criaturas">Explorar</Link>
        <Link to="/meu-bestiario">Meu Bestiário</Link>
      </div>
    </nav>
  );
}

export default Navbar;