import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 >Roteamento</h1>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ad ducimus dolore dolor excepturi beatae explicabo laudantium praesentium! Molestiae, unde explicabo! Quo dolores veritatis assumenda distinctio sunt voluptate provident quia.</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <p><a href="#" target="_blank" rel="noopener noreferrer">Wender Queiroz</a></p>
      </footer>
    </div>
  );
}
