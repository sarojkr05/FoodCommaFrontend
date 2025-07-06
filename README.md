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
![Screenshot 2025-07-06 112447](https://github.com/user-attachments/assets/f23b28c4-307b-46d7-941b-ba5abee94bb6)
![Screenshot 2025-07-06 112515](https://github.com/user-attachments/assets/bb02de6e-3b3f-4376-a831-80fd3746000c)
![Screenshot 2025-07-06 114041](https://github.com/user-attachments/assets/554d67a4-1fbf-4c0d-80fe-d1c9ec8c63df)
![Screenshot 2025-07-06 114105](https://github.com/user-attachments/assets/7c2a96fb-6603-46bd-9174-095e1e12d50a)
![Screenshot 2025-07-06 114133](https://github.com/user-attachments/assets/7e183061-897b-48b4-a458-3813f4f95e17)
![Screenshot 2025-07-06 114201](https://github.com/user-attachments/assets/d46d1735-bbb8-41dd-8d3d-32e29dfc2a2c)

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
