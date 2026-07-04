# ShopEase E-Commerce Application

ShopEase is a full-stack e-commerce application designed to provide a seamless shopping experience. It includes user authentication, product browsing with search/filter/sort, cart management, and a secure checkout process.

## Features

- **User Authentication:** Sign up and Login functionality with JWT-based protection.
- **Product Catalog:** View products with advanced search, category filtering, and price sorting.
- **Shopping Cart:** Add, remove, and manage items in the cart.
- **Checkout Process:** Secure order placement with form validation.
- **Responsive Design:** Fully responsive UI built with Tailwind CSS.

## Tech Stack

- **Frontend:** React.js, React Router, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JSON Web Tokens (JWT)

## Folder Structure

```text
├── client/          # Frontend React application
├── server/          # Backend Node.js/Express server
│   ├── config/      # Database configuration
│   ├── controllers/ # Request handlers
│   ├── models/      # MongoDB data models
│   └── routes/      # API route definitions
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   # Frontend
   cd client
   npm install

   # Backend
   cd ../server
   npm install
   ```

3. Run the application:
   ```bash
   # Backend (requires MongoDB running)
   cd server
   npm start

   # Frontend
   cd ../client
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## API Endpoints

### Auth
- `POST /api/auth/register` - Create a new user
- `POST /api/auth/login` - Authenticate user and get JWT

### Products
- `GET /api/products` - Fetch all products

### Orders
- `POST /api/orders` - Place a new order (requires Authorization header)

## Screenshots
*(Add project screenshots here)*

## Future Improvements

- Add user profile management.
- Implement payment gateway integration (e.g., Stripe/Razorpay).
- Add product review and rating system.
- Implement order history dashboard.
