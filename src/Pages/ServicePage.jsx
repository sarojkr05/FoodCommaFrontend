import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layouts/Layout";

const services = [
  {
    title: "Fresh Pizza",
    desc: "Hand-tossed, oven-baked, and made with the freshest ingredients.",
    image: "/images/FreshPizza.jpg"
  },
  {
    title: "Fast Delivery",
    desc: "Hot and cheesy pizza delivered to your doorstep in under 30 minutes.",
    image: "/images/FastDelivery.jpg",
  },
  {
    title: "Custom Orders",
    desc: "Customize your pizza with your favorite toppings and crust style.",
    image: "/images/CustomeOrders.jpg",
  },
  {
    title: "Affordable Combos",
    desc: "Enjoy pizza combos with drinks, fries, and discounts.",
    image: "/images/PizzaCombo.jpg",
  },
];

const ServicePage = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-yellow-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-10">
          🍕 Our Pizza Services
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/order">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-orange-700 transition duration-300">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default ServicePage;
