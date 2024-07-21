import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss"

export default function ErrorPage({error}) {
  console.error(error);
  return (
    <div className={styles.container}>
      <h1 className={styles.big404}>404</h1>
      <h2 className={styles.sub404}>Oups! La page que vous demandez n'existe pas.</h2>
      <p className={styles.goToHome}><Link to="/">Retourner sur la page d'accueil</Link></p>
    </div>
  );
}