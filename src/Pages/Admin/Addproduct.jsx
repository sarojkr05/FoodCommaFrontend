import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layouts/Layout";
import Food from '../../assets/Images/food.svg';
import { useState } from "react";
import { addProducts } from "../../Redux/Slices/ProductSlice";
import { useNavigate } from "react-router-dom";
function AddProduct() {

    // const { productsData } = useSelector((state) => state.product)

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [addProduct, setAddProduct] = useState({
        productName: '',
        description: '',
        productImage: '',
        quantity: '',
        price: '',
        category: ''
    })

    function handleUserInput(e) {
        const { name, type, files, value } = e.target;
        if (type === 'file') {
          setAddProduct((prev) => ({
            ...prev,
            [name]: files[0]
          }));
        } else {
          setAddProduct((prev) => ({
            ...prev,
            [name]: value
          }));
        }
      }      

    //  async function handleFormSubmit(e) {
    //     e.preventDefault(); // prevent the form from reloading the page
    //     console.log(addProduct);

    //     const apiReponse = await dispatch(addProducts(addProduct));
    //     console.log("Api response", apiReponse);
    //     if(apiReponse.meta.arg.success) {
    //         navigate('/');
    //     }
    // }
    async function handleFormSubmit(e) {
        e.preventDefault(); // prevent form reload
        console.log(addProduct);
    
        const apiResponse = await dispatch(addProducts(addProduct));
        console.log("API Response:", apiResponse);
    
        // Check if the API request was successful
        if (apiResponse.payload && apiResponse.payload.data && apiResponse.payload.data.success) {
            navigate('/');
        } else {
            console.error("API request failed:", apiResponse);
        }
    }
    

    return (
        <Layout>
           <section className="py-12">
           <div className="flex items-center justify-center px-5">
                <div className="md:w-2/6">
                    <img src={Food} />
                </div>
                <div className="max-w-md md:w-4/6 mx-auto mt-8 bg-white p-4">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Add product
                    </h2>

                    <form>
                        {/* product name */}
                        <div className="mb-4">
                            <label 
                                htmlFor="productName" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Product name <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="text" 
                                required
                                minLength={5}
                                maxLength={20}
                                onChange={handleUserInput}
                                name="productName" 
                                id="productName" 
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                
                            />
                        </div>

                        {/* description */}
                        <div className="mb-4">
                            <label 
                                htmlFor="description" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Description
                            </label>
                            <input 
                                type="text" 
                                required
                                minLength={5}
                                maxLength={60}
                                onChange={handleUserInput}
                                name="description" 
                                id="description" 
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                
                            />
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                            <label 
                                htmlFor="price" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Product price <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="number" 
                                required
                                name="price" 
                                onChange={handleUserInput}
                                id="price" 
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                
                            />
                        </div>

                        {/* quantity */}
                        <div className="mb-4">
                            <label 
                                htmlFor="quantity" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Product quantity <span className="text-red-500">*</span>
                            </label>
                            <input 
                                type="number" 
                                required
                                name="quantity" 
                                onChange={handleUserInput}
                                id="quantity" 
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                
                            />
                        </div>

                        {/* category */}
                        <div className="mb-2">
                            <label 
                                htmlFor="category" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Select Category <span className="text-red-500">*</span>
                            </label>
                            <select 
                                name="category" 
                                onChange={handleUserInput}
                                id="category" 
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="veg">Vegetarian</option>
                                <option value="non-veg">Non-Vegetarian</option>
                                <option value="drinks">Soft drinks</option>
                                <option value="sides">Sides</option>
                            </select>
                        </div>


                        {/* image */}
                        <div className="mb-4">
                            <label 
                                htmlFor="productImage" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Product image <span className="text-red-600">(.jpg, .png, .jpeg )</span>
                            </label>
                            <input 
                                type="file" 
                                required
                                name="productImage" 
                                onChange={handleUserInput}
                                id="productImage" 
                                accept=".jpg, .jpeg, .png"
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                
                            /> 
                        </div>

                        <button
                            onClick={handleFormSubmit}
                            type="submit"
                            className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                        >
                            Add product
                        </button>
                    </form>
                </div>
           </div>
            
           </section>
        </Layout>
    )
}

export default AddProduct;