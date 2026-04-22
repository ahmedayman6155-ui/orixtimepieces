"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-wide"
        >
          ORIX TIMEPIECES
        </motion.h1>

        <p className="mt-4 text-gray-400 max-w-xl">
          Luxury watches curated for timeless elegance and precision.
        </p>

        <a href="https://wa.me/201031797953" target="_blank">
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-xl">
            Contact on WhatsApp
          </button>
        </a>
      </section>

      {/* About */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-400 leading-relaxed">
          ORIX Timepieces specializes in premium luxury watches sourced from
          top global brands. We focus on authenticity, quality, and refined
          style.
        </p>
      </section>

      {/* Products */}
      <section className="px-6 py-16 bg-neutral-950">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Featured Collection
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border border-gray-800 rounded-xl p-4"
            >
              <div className="h-48 bg-gray-800 mb-4 rounded-lg"></div>
              <h3 className="text-lg font-semibold">
                Luxury Watch {item}
              </h3>
              <p className="text-gray-400 text-sm">
                Premium design & high quality finish.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-gray-400 mb-6">
          Subscribe for new arrivals & offers
        </p>

        <div className="flex gap-2">
          <input
            className="flex-1 px-4 py-2 rounded text-black"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-white text-black px-4 py-2 rounded">
            Join
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800">
        © {new Date().getFullYear()} ORIX TIMEPIECES
      </footer>
    </div>
  );
}