import { useNavigate } from "react-router-dom";
import Layout from "../../Layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { placeOrder } from "../../Redux/Slices/OrderSlice";

function Order() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartsData } = useSelector((state) => state.cart);

  const [details, setDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    paymentMethod: "OFFLINE",
    address: ""
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    const { fullName, email, phone, address, paymentMethod } = details;
    if (!fullName || !email || !phone || !address || !paymentMethod) {
      toast.error("Please fill all the fields");
      return;
    }

    const response = await dispatch(placeOrder());
    console.log("order response", response);

    if (response?.payload?.data?.success) {
      toast.success("Order placed successfully");
      navigate("/order/success");
    } else {
      toast.error("Something went wrong, cannot place order");
    }
  }

  return (
    <Layout>
      <section className="text-gray-600 body-font min-h-56">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Thanks for Choosing Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Total Price -
              <span className="font-bold text-red-900">
                ₹ {cartsData?.items?.length === 0
                  ? ""
                  : cartsData?.items?.reduce(
                      (acc, item) => acc + item?.quantity * item?.product?.price,
                      0
                    )}
              </span>
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="fullName" className="text-lg font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={details.fullName}
                onChange={handleUserInput}
                placeholder="Enter your full name"
                className="p-2 border rounded-md focus:outline-none focus:border-yellow-500 bg-white text-gray-700"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={details.email}
                onChange={handleUserInput}
                placeholder="Enter your email"
                className="p-2 border rounded-md focus:outline-none focus:border-yellow-500 bg-white text-gray-700"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-lg font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={details.phone}
                onChange={handleUserInput}
                placeholder="Enter your phone number"
                className="p-2 border rounded-md focus:outline-none focus:border-yellow-500 bg-white text-gray-700"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="paymentMethod" className="text-lg font-medium text-gray-700">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={details.paymentMethod}
                onChange={handleUserInput}
                className="p-2 border rounded-md focus:outline-none focus:border-yellow-500 bg-white text-gray-700"
              >
                <option value="OFFLINE">Offline</option>
                <option value="ONLINE">Online</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="address" className="text-lg font-medium text-gray-700">
                Address
              </label>
              <textarea
                name="address"
                value={details.address}
                onChange={handleUserInput}
                placeholder="Enter your address"
                className="p-2 border rounded-md focus:outline-none focus:border-yellow-500 bg-white text-gray-700"
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              Place Order
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Order;
