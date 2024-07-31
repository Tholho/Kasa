import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss"

export default function ErrorPage({ error }) {
  error ? console.error(error) : console.log('error');

  const errorCode = error && error.code ? error.code : "404";
  const errorMessage = error && error.status ? error.status : "Oups! La page que vous demandez n'existe pas.";

  return (
    <div className={styles.container}>
      <h1 className={styles.big404}>{errorCode}</h1>
      <h2 className={styles.sub404}>{errorMessage}</h2>
      <p className={styles.goToHome}><Link to="/">Retourner sur la page d'accueil</Link></p>
    </div>
  );
}