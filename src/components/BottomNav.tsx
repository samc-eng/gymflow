import Link from "next/link";
import styles from "./BottomNav.module.css"

export default function BottomNav() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>Accueil</Link>
      <Link href="/workouts" className={styles.link}>Historique</Link>
      <Link href="/progress" className={styles.link}>Progression</Link>
      <Link href="/profile" className={styles.link}>Profil</Link>
    </nav>
  );
}