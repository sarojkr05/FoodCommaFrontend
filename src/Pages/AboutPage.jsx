import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layouts/Layout";

const AboutPage = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-yellow-50 px-4 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-orange-700 mb-6">About FoodComma</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          Welcome to <span className="font-semibold text-orange-600">FoodComma</span> — your go-to destination for
          delicious, fresh, and hot pizzas delivered right to your doorstep.
          We believe food is more than just a meal — it’s an experience, a joy, and a reason to smile.
        </p>

        <img
          src="/images/FreshPizza.jpg"
          alt="Delicious pizza"
          className="rounded-2xl shadow-lg mx-auto mb-10 w-full max-w-xl object-cover"
        />

        <h2 className="text-3xl font-semibold text-orange-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          At FoodComma, our mission is simple — to serve the tastiest pizzas made with love, fresh ingredients, and
          quick delivery. We combine traditional flavors with modern convenience, offering both customization and
          affordability to satisfy every pizza lover.
        </p>

        <h2 className="text-3xl font-semibold text-orange-700 mb-4">Why Choose Us?</h2>
        <ul className="text-left text-lg text-gray-700 list-disc list-inside mb-10 max-w-2xl mx-auto">
          <li>🍕 100% fresh and hand-made pizzas</li>
          <li>🚀 Fast & hot doorstep delivery</li>
          <li>💰 Affordable combo deals and offers</li>
          <li>🧑‍🍳 Fully customizable pizzas</li>
          <li>⭐ Excellent customer satisfaction</li>
        </ul>

        <Link to="/order">
          <button className="bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-orange-700 transition duration-300">
            Start Your Order
          </button>
        </Link>
      </div>
    </div>
    </Layout>
  );
};

export default AboutPage;
