import Link from "next/link";

export default function BottomNav() {
  return (
    <nav>
      <Link href="/">Accueil</Link>
      <Link href="/workouts">Historique</Link>
      <Link href="/progress">Progression</Link>
      <Link href="/profile">Profil</Link>
    </nav>
  );
}