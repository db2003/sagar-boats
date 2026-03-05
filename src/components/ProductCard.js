import Link from "next/link";

export default function ProductCard({ title, subtitle, slug, image = "/placeholder.jpg" }) {
  return (
    <Link href={`/products/${slug}`} className="productCardLink">
      <div className="productCard">
        <img src={image} alt={title} />

        <div className="productOverlay">
          <h3>{title}</h3>
          <p>{subtitle || "High performance racing shell"}</p>
          <span className="cardArrow">View Details →</span>
        </div>
      </div>
    </Link>
  );
}