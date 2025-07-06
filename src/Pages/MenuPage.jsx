import { useEffect } from "react";
import Layout from "../Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProducts } from "../Redux/Slices/ProductSlice";

function MenuPage() {
  const { productsData } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllProducts());
  }, [dispatch])

  return (
    <Layout>
      <section className="text-gray-700 body-font bg-gradient-to-r from-amber-50 to-orange-100 min-h-screen">
        <div className="container px-5 py-12 mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text">
              Our Menu 🍕
            </h1>
            <p className="mt-2 text-gray-600">
              Explore our delicious variety of pizzas and beverages crafted with love.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {productsData?.length > 0 ? (
              productsData.map((item) => (
                item.inStock && (
                  <div
                    key={item._id}
                    className="max-w-sm rounded overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300"
                  >
                    <Link to={`/product/${item._id}`}>
                      <img
                        src={item.productImage}
                        alt={item.productName}
                        className="w-full h-52 object-cover"
                      />
                      <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                          {item.productName}
                        </h2>
                        <p className="text-sm text-gray-500 mb-2">
                          {item.category}
                        </p>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        <p className="text-lg font-bold text-orange-600">
                          ₹ {item.price}
                        </p>
                      </div>
                    </Link>
                  </div>
                )
              ))
            ) : (
              <p className="text-center text-gray-500">No products available</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default MenuPage;
