"use client";

import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();

  const products: any = {
    rolex: {
      name: "Rolex Submariner",
      price: "$12,000",
      img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
      desc: "Iconic diving watch with timeless design.",
    },
    ap: {
      name: "Audemars Piguet Royal Oak",
      price: "$25,000",
      img: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb",
      desc: "Bold luxury sports watch.",
    },
    patek: {
      name: "Patek Philippe Nautilus",
      price: "$30,000",
      img: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5",
      desc: "Elegant collectible timepiece.",
    },
  };

  const product = products[params.id as string];

  if (!product) return <div className="text-white p-10">Not Found</div>;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <img src={product.img} className="w-full h-96 object-cover rounded" />

        <h1 className="text-3xl mt-6">{product.name}</h1>
        <p className="text-gray-400 mt-2">{product.desc}</p>
        <p className="text-xl mt-4">{product.price}</p>

        <a
          href={`https://wa.me/201031797953?text=I'm interested in ${product.name}`}
          target="_blank"
        >
          <button className="mt-6 bg-white text-black px-6 py-3 rounded">
            Order on WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
}