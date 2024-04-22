import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <h1>Hello World!!</h1>
    <h2>Subititulo</h2>
    <br/>
    <p>paragrafo</p>
    <div>
      <h4>outro paragrafo</h4>
    </div>
    </main>
  );
}
