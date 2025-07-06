# 🍽️ FoodComma — Full Stack Pizza Ordering App

FoodComma is a modern, full-stack pizza ordering web application built with the **MERN stack**. It allows users to browse dynamic menus, manage carts, place orders, and access order history. Admins can manage products, view orders, and control platform data — all through a responsive UI.

---

## 🚀 Features

- 🔐 **User Authentication** (Login/Register)
- 🍕 **Dynamic Menus** with filtering & category support
- 🛒 **Cart Management** with item count, quantity update, and removal
- 📦 **Order Placement** and tracking
- 🧑‍💼 **Admin Panel** for product & order management
- 🌐 Fully responsive UI using **Tailwind CSS**
- 🧱 Clean backend architecture using service-repository pattern

---

## 🛠️ Tech Stack

| Frontend     | Backend     | Database | Styling       | Auth & Uploads       |
|--------------|-------------|----------|---------------|-----------------------|
| React.js     | Node.js     | MongoDB  | Tailwind CSS  | JWT Auth, Cloudinary |

---

## 📸 Screenshots

> Add your screenshots here using Markdown:

🧑‍💻 Folder Structure

myPizzaAppFtontend/ │React Frontend │ ├── src/ │ ├── public/ │ └── .env │ ├── server/ # Node.js + Express Backend │ ├── src/ │ │ ├── controllers/ │ │ ├── routes/ │ │ ├── services/ │ │ ├── repositories/ │ │ └── schemas/ │ └── .env │ ├── README.md └── package.json # Optional root scripts (monorepo)

🧪 Local Setup
🔧 Prerequisites
Node.js

MongoDB running locally or Atlas

Cloudinary account (for product image uploads)

📦 Clone the repo
git clone https://github.com/sarojkr05/FoodCommaFrontend
cd FoodCommaFrontend

⚙️ Setup Backend

cd FooCommaBackend
npm install
npm start

💻 Setup Frontend

cd FoodCommaFrontend
npm install
npm run dev

🔒 Environment Variables
Create a .env file inside /myPizzaAppBackend with:

MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

👨‍💻 Author
Saroj Kumar Das

📧 sarojsarojkumar753@gmail.com

🌐 Portfolio (https://sarojkr.netlify.app/)