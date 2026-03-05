import Link from "next/link";

export default function Header({ variant = "transparent" }) {
  return (
    <header className={variant === "dark" ? "header headerDark" : "header"}>
      <Link href="/" className="logo">Sagar Boats</Link>

      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <a href="/#gallery">Gallery</a>
        <a href="/#contact">Contact</a>
      </nav>

      <div className="socials">
        <a href="#">IG</a>
        <a href="#">FB</a>
        <a href="#">TW</a>
      </div>
    </header>
  );
}