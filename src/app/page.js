import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Counter from "../components/Counter";
import HomepageGalleryCarousel from "../components/HomepageGalleryCarousel";
import products from "../data/products";

export default function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      <Header />
      <Hero />

      {/* ── About Section ─────────────────────── */}
      <section className="aboutSection">
        <div className="aboutContainer">
          <div className="aboutImage">
            <img src="/boats/Rajesh Lunawat Founder and Creator of the Legacy.jpg" alt="Rajesh Lunawat – Founder of Swastik Fibchem Limited" />
          </div>
          <div className="aboutContent">
            <span className="hero-label">Our Legacy</span>
            <h2>About Rajesh Lunawat</h2>
            <p>
              <strong>Rajesh Lunawat</strong>, founder of Swastik Fibchem Limited, is a pioneering entrepreneur who recognized a unique opportunity in competitive rowing. In 1995, he established India's first manufacturer of international-quality racing rowing boats and composite marine products—a vision that has endured and thrived for nearly three decades.
            </p>
            <p>
              Invited to Germany to study advanced boat-building techniques under rowing engineer Klaus Filter, Lunawat brought European precision and innovation back to India. Today, Swastik Fibchem Limited stands as a symbol of engineering excellence, producing world-class racing shells from Single Sculls to Eight-person boats using cutting-edge materials like Carbon Fiber and Kevlar.
            </p>
            
            <div className="aboutStats">
              <Counter finalNumber={30} label="Years of Excellence" />
              <Counter finalNumber={500} label="Boats Delivered" />
            </div>
            
            <div className="aboutCta">
              <Link href="/about" className="cta">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ──────────────────────── */}
      <section className="highlightProducts">
        <div className="sectionHeader">
          <p className="label">Our Fleet</p>
          <h2>Explore Our Boats</h2>
          <p>Crafted for athletes who demand the best on the water.</p>
        </div>

        <div className="productRow">
          {featured.map((p) => (
            <ProductCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              subtitle={p.subtitle}
              image={p.image}
            />
          ))}
        </div>

        <div className="sectionCta">
          <Link href="/products" className="cta">View All Boats</Link>
        </div>
      </section>

      {/* ── Gallery ───────────────────────── */}
      <section className="gallery">
        <div className="sectionHeader">
          <p className="label">Craftsmanship</p>
          <h2>Gallery</h2>
          <p>A glimpse into our world of precision boat building.</p>
        </div>

        <HomepageGalleryCarousel />
      </section>

      {/* ── CTA Banner ────────────────────── */}
      <section className="ctaBanner">
        <h2>Ready to Get on the Water?</h2>
        <p>Contact us to discuss your custom boat requirements.</p>
        <Link href="/contact" className="cta">Get in Touch</Link>
      </section>

      {/* ── Footer ────────────────────────── */}
      <footer className="footer">
        © 2026 Swastik Boats. All rights reserved.
      </footer>
    </>
  );
}