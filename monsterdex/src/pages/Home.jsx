import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.home}>
      <div>
        <p className={styles.tag}>MONSTERDEX</p>

        <h1>
          Descubra.
          <br />
          Colecione.
          <br />
          Domine.
        </h1>

        <p className={styles.text}>
          Explore criaturas, descubra seus atributos e monte
          seu próprio bestiário.
        </p>

        <Link to="/criaturas" className={styles.button}>
          EXPLORAR CRIATURAS
        </Link>
      </div>

      <div className={styles.scanner}>
        <div className={styles.scannerBox}>
          SCAN
        </div>
      </div>
    </section>
  );
}

export default Home;