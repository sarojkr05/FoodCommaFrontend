import IconArrowRight from "../Components/Icons/ArrowRight";

import PizzaImage from "../assets/Images/pizza2.png";
import CookingImage from "../assets/Images/cooking1.png";
import IconPatchCheck from "../Components/Icons/IconPatchCheck";
import OrderFood from "../assets/Images/orderFood.png";
import Pickup from "../assets/Images/pickup.png";
import Enjoy from "../assets/Images/enjoy.png";
import Layout from "../Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../Redux/Slices/ProductSlice";
import { Link } from "react-router-dom";
function Home() {
  const dispatch = useDispatch();

  const { productsData } = useSelector((state) => state.product);

  useEffect(() => {
    // This will be called when the component mounts
    dispatch(getAllProducts());
  }, []);

  return (
    <Layout>
      <div>
        {/* Hero section */}
        <section
          className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-300
                "
        >
          <div className="w-4/6 ml-4 text-center md:w-2/6 md:text-left">
            <div className="flex justify-center text-4xl md:justify-normal">
              <h1 className="pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text">
                Enjoy the Slice{" "}
              </h1>
              <h1>😋</h1>
            </div>

            <p className="pb-4 text-[#6B7280]">
              The Pizza App lets you order your favorite pizza from the comfort
              of your home. Enjoy the best pizza in town with just a few clicks.
            </p>

            <button className="flex items-center px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 group">
              Order Now
              <span className="inline-block ml-3 transition-transform ease-in-out group-hover:translate-x-2">
                <IconArrowRight />
              </span>
            </button>
          </div>

          <div>
            <img src={PizzaImage} alt="Pizza" width={550} height={550} />
          </div>
        </section>

        {/** Menu Section  */}

        <div className="flex flex-col items-center justify-center text-center lg:text-center lg:w-1/2 lg:pl-12 mx-auto">
          <h3 className="mb-2 text-3xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
            Menu
          </h3>
          <p className="text-base leading-relaxed text-[#6B7280]">
            Savor the rich flavors of our handcrafted pizzas, topped with the
            freshest ingredients and baked to perfection. From classic
            Margherita to bold BBQ Chicken, every bite is a celebration of
            taste. Pair it with our crispy garlic bread and a refreshing drink
            for the ultimate feast! 🍕🔥
          </p>
            <div className="flex space-x-4">
              <button className="bg-transparent text-gray-700 px-4 py-2 rounded-md hover:bg-amber-500 hover:text-white transition">
                All
              </button>

              <button className="bg-transparent text-gray-700 px-4 py-2 rounded-md hover:bg-amber-500 hover:text-white transition">
                Veg Pizza
              </button>

              <button className="bg-transparent text-gray-700 px-4 py-2 rounded-md hover:bg-amber-500 hover:text-white transition">
                Non-Veg Pizza
              </button>

              <button className="bg-transparent text-gray-700 px-4 py-2 rounded-md hover:bg-amber-500 hover:text-white transition">
                Beverage
              </button>
            </div>
        </div>

        {/* Services section */}
        <section className="py-4 mt-6 bg-gradient-to-r from-amber-50 to-orange-300">
          <div className="container flex flex-col md:flex-row">
            <div className="flex flex-col items-center justify-center rounded-lg lg:w-1/2">
              <img
                src={CookingImage}
                width={500}
                className="rounded-lg"
                alt="Cooking"
              />
            </div>
            <div className="flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left">
              <div className="flex flex-col items-center lg:items-start">
                <div>
                  <h2 className="mb-2 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
                    Cooked by the best <br /> chefs in the world
                  </h2>
                  <p className="text-base leading-relaxed text-[#6B7280]">
                    There are many benefits regarding to that but the main ones
                    are:
                  </p>
                </div>
              </div>

              <div className="w-full p-1">
                <div className="flex items-center h-full p-2 text-2xl rounded">
                  <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                  <span className="font-bold title-font">Perfect taste</span>
                </div>
              </div>
              <div className="w-full p-1">
                <div className="flex items-center h-full p-2 text-2xl rounded">
                  <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                  <span className="font-bold title-font">Prepared quickly</span>
                </div>
              </div>
              <div className="w-full p-1">
                <div className="flex items-center h-full p-2 text-2xl rounded">
                  <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                  <span className="font-bold title-font">
                    Food hygeine guaranteed
                  </span>
                </div>
              </div>

              <div className="px-5 py-4 mx-auto">
                <div className="flex justify-center py-4">
                  <div className="inline-flex w-16 h-1 bg-yellow-500 rounded-full"></div>
                </div>

                <div className="flex flex-wrap space-y-6 md:space-y-0">
                  <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                      <img src={OrderFood} />
                    </div>
                    <div className="flex-grow">
                      <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                        Order Food
                      </h2>
                      <p className="text-base leading-relaxed">
                        As easy as 1, 2, 3. Just select your favorite pizza and
                        place your order.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                      <img src={Pickup} />
                    </div>
                    <div className="flex-grow">
                      <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                        Pickup Food
                      </h2>
                      <p className="text-base leading-relaxed">
                        Pick up your order from the nearest store or get it
                        delivered to your doorstep.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 md:w-1/3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mb-5 bg-yellow-100 rounded-full">
                      <img src={Enjoy} />
                    </div>
                    <div className="flex-grow">
                      <h2 className="mb-3 text-lg font-bold text-gray-900 title-font">
                        Enjoy Food
                      </h2>
                      <p className="text-base leading-relaxed">
                        As soon as you get your order, enjoy the delicious pizza
                        with your loved ones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto">
          <div className="flex flex-wrap justify-center">
            {productsData.map((item) => {
              return (
                item.inStock && (
                  <div className="p-4 md:w-1/3" key={item._id}>
                    <Link to={`/product/${item._id}`}>
                      <div className="overflow-hidden border rounded-lg border-opacity-60">
                        <img
                          src={item.productImage}
                          alt="Pizza Image"
                          className="object-cover object-center w-full lg:h-48 md:h-36"
                        />
                        <div className="p-6 border">
                          <h2 className="text-xs font-medium tracking-widest text-gray-400 title-font">
                            {item.category}
                          </h2>
                          <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                            {item.productName}
                          </h1>
                          <p className="mb-4 text-base leading-relaxed">
                            {item.description}
                          </p>
                          <p className="text-lg font-medium text-gray-900 title-font">
                            ${item.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start mb-4">
          {/** Google Map Section */}
          <div className="google-map-code lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>

          {/** About Section */}
          <div className="flex flex-col text-center lg:text-left lg:w-1/2 lg:pl-12">
            <h3 className="mb-2 text-3xl text-center font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text">
              About
            </h3>
            <p className="text-base leading-relaxed text-[#6B7280]">
              At Pizza App, we believe that a great pizza is more than just a
              meal—it’s an experience, a celebration of flavors, and a moment of
              pure joy in every bite. Our passion for pizza-making is rooted in
              tradition, creativity, and a deep love for bringing people
              together over delicious food. Our journey began with a simple yet
              unwavering commitment: to craft exceptional pizzas using only the
              freshest, highest-quality ingredients. Every dough is carefully
              prepared, hand-stretched to perfection, and baked to achieve that
              irresistible golden crust. Our rich, flavorful sauces are made
              from vine-ripened tomatoes, slow-cooked to perfection, while our
              premium cheeses melt beautifully to create the perfect harmony of
              taste and texture. From the moment your pizza is placed in the
              oven to the first delicious bite, we want you to feel the warmth,
              passion, and love that goes into every creation. So, whether
              you're gathering with family, sharing a meal with friends, or
              treating yourself to a well-deserved indulgence, we invite you to
              join us on this flavorful journey. Welcome to Pizza App, where
              every pizza tells a story—and every story is filled with flavor,
              passion, and joy
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
