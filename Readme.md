# 🛒 Vibe Commerce - Full Stack E-Commerce Cart

A modern, feature-rich shopping cart application built with React, Node.js/Express, and MongoDB. This project demonstrates full-stack e-commerce capabilities including product browsing, cart management, and mock checkout functionality.


## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Integration](#api-integration)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)

## ✨ Features

### Frontend (React)
- 📦 **Product Grid Display** - Browse 194+ products with images and prices
- 🛍️ **Shopping Cart** - Add, remove, and update item quantities
- 💰 **Real-time Total Calculation** - Dynamic price updates
- ✅ **Mock Checkout** - Complete purchase flow with order confirmation
- 📱 **Responsive Design** - Mobile-first, works on all screen sizes
- 🎨 **Modern UI/UX** - Clean, intuitive interface

### Backend (Node.js + Express)
- 🔌 **RESTful API** - Clean, organized endpoints
- 🗄️ **Database Integration** - MongoDB for cart persistence
- 🔐 **Error Handling** - Comprehensive error management
- 🚀 **External API Integration** - DummyJSON API for product data

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **React Router** - Navigation
- **Axios** - HTTP client
- **TailwindCSS** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Axios** - External API requests
- **dotenv** - Environment configuration

## 🔗 API Integration

This project integrates with **DummyJSON API** for product data.

### Why DummyJSON over Fake Store API?

| Feature | DummyJSON | Fake Store API |
|---------|-----------|----------------|
| **Total Products** | 194 | 20 |
| **Categories** | 20+ | 4 |
| **Product Details** | Rich (rating, stock, brand, images) | Basic |
| **API Reliability** | Excellent | Good |

**DummyJSON provides nearly 10x more products** (194 vs 20), making the shopping experience more realistic and diverse. The API includes detailed product information with ratings, stock levels, multiple images, and comprehensive metadata.

**API Documentation**: [https://dummyjson.com/docs/products](https://dummyjson.com/docs/products)

## 📦 Prerequisites

Before you begin, ensure you have:

- **Node.js** (v16.0.0 or higher)
- **npm**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

## 🚀 Installation

1. **Clone the repository**
```bash
git clone https://github.com/bhavyakateja/vibe-commerce-assignment-.git
cd vibe-commerce-cart
```

2. **Install Backend Dependencies**
```bash
cd server
npm install
```

3. **Install Frontend Dependencies**
```bash
cd ../client
npm install
```

## 🔧 Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
PORT=5000

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/vibe-commerce
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vibe-commerce

# CORS Configuration
CLIENT_URI=http://localhost:5173
```

Create a `.env` file in the `client` directory:

```env
VITE_SERVER_URI=http://localhost:9003/api
```

## 🏃 Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd client
npm run dev
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd server
npm run start
# App opens on http://localhost:3000
```

### Production Build

**Server:**
```bash
cd server
npm run start
```

**Frontend:**
```bash
cd client
npm run build
npm install -g serve
serve -s build
```

## 📡 API Endpoints

### Products
```
GET    /api/products              # Get all products (194 items from DummyJSON)
```

### Cart
```
GET    /api/cart                  # Get user's cart with total
POST   /api/cart                  # Add item to cart
                                  # Body: { productId, quantity }
DELETE /api/cart/:id              # Remove item from cart
```

### Checkout
```
POST   /api/checkout              # Process mock checkout
                                  # Body: { cartItems, name, email }
                                  # Returns: { total, timestamp, orderDetails }
```

## 📁 Project Structure

```
vibe-commerce-cart/
├── backend/
│   ├── config/
│   │   └── DbConnect.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── productController.js  # Product logic
│   │   ├── cartController.js     # Cart logic
│   │   └── checkoutController.js # Checkout logic
│   ├── models/
│   │   ├── cartModel.js               # Cart schema
│   │   └── receiptModel.js              # Order schema
│   ├── routes/
│   │   ├── productRoutes.js      # Product routes
│   │   ├── cartRoutes.js         # Cart routes
│   │   └── checkoutRoutes.js     # Checkout routes
│   ├── .env                      # Environment variables
│   ├── server.js                 # Entry point
│   ├── app.js                 
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductCard.jsx   # Product display
│   │   │   ├── CartItem.jsx      # Cart item
│   │   │   ├── Checkout.jsx      # Checkout form
│   │   ├── services/
│   │   │   └── apiConnection.js            # API calls
│   │   ├── App.jsx                # Main app component
│   │   └── main.jsx              # Entry point
│   ├── .env                      # Environment variables
│   └── package.json
│
└── README.md
```

## 🎯 Assignment Requirements Completed

### ✅ Backend APIs
- [x] `GET /api/products` - Returns 194 products from DummyJSON
- [x] `POST /api/cart` - Add items with productId and quantity
- [x] `DELETE /api/cart/:id` - Remove item from cart
- [x] `GET /api/cart` - Get cart items with total
- [x] `POST /api/checkout` - Mock checkout returning receipt with total and timestamp

### ✅ Frontend Features
- [x] Products grid with "Add to Cart" buttons
- [x] Cart view displaying items, quantities, and total
- [x] Remove and update quantity buttons
- [x] Checkout form (name and email)
- [x] Receipt modal on successful checkout
- [x] Responsive design

### ✅ Bonus Features
- [x] Database persistence (MongoDB)
- [x] External API integration (DummyJSON - 194 products)

## 🎬 Live Demo
👉 [Watch Full Demo on YouTube](https://youtu.be/WemXHkc40QA?si=FfDCe9knuvg0VyW5)


## 🔮 Future Enhancements

- [ ] User authentication & authorization
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Product reviews and ratings
- [ ] Order history
- [ ] Admin dashboard
- [ ] Email notifications


## 👨‍💻 Author

**Bhavya Kateja**
- GitHub: [@bhavyakateja](https://github.com/bhavyakateja)

## 🙏 Acknowledgments

- [DummyJSON](https://dummyjson.com/) for the excellent free API
- [MongoDB](https://www.mongodb.com/) for database solutions
- [React](https://reactjs.org/) team for the amazing library
- Vibe Commerce for the opportunity

---

⭐ **If you found this project helpful, please give it a star!** ⭐

Made with ❤️ for Vibe Commerce Screening Assignment
