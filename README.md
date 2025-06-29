## 🏗️ Architecture Overview

```
learn-nodejs-mongodb/
├── 📁 Backend (Node.js + Express + MongoDB)
│   ├── app.js                 # Main server file
│   ├── routes/                # API routes
│   ├── controllers/           # Business logic
│   ├── models/                # MongoDB schemas
│   ├── graphql/               # Apollo Server setup
│   └── graphql-m2/            # Magento 2 integration
├── 📁 Frontend (React + Apollo Client)
│   ├── react-app/             # React application
│   ├── components/            # React components
│   └── graphql/               # GraphQL queries/mutations
└── 📁 Documentation
    ├── README.md              # This file
```

## ✨ Features

### 🏠 Local Product Management
- **CRUD Operations**: Create, read, update, delete products
- **Image Upload**: Multer for file handling
- **MongoDB Storage**: Persistent data storage
- **GraphQL API**: Apollo Server for data operations
- **Real-time Updates**: Apollo Client cache management

### 🌐 Venia Magento 2 Integration
- **Product Catalog**: Fetch products from Venia demo store
- **GraphQL Client**: Dynamic import for ES modules compatibility
- **Pagination**: Navigate through product pages
- **Search & Filter**: Find products by name or category
- **REST API**: Backend proxy for frontend consumption

### 🎨 Modern Frontend
- **React 18**: Modern React with hooks
- **Apollo Client**: GraphQL client for local products
- **Swiper Slider**: Banner carousel with autoplay
- **Responsive Design**: Mobile-first approach
- **Tab Navigation**: Switch between local and Venia products

### 🎯 Banner System
- **Dynamic Banners**: Create and manage promotional content
- **Swiper Integration**: Modern carousel functionality
- **Autoplay**: 5-second automatic transitions
- **Navigation**: Previous/Next buttons with pagination
- **Responsive**: Adapts to different screen sizes

## 📁 Project Structure

### Backend Structure
```
├── app.js                     # Main Express server
├── routes/
│   └── web.js                 # API routes (products, banners, venia)
├── controllers/
│   ├── productController.js   # Product CRUD operations
│   └── bannerController.js    # Banner management
├── models/
│   ├── product.js             # Product MongoDB schema
│   └── banner.js              # Banner MongoDB schema
├── graphql/
│   ├── server.js              # Apollo Server setup
│   ├── schema.js              # GraphQL schema
│   └── resolvers.js           # GraphQL resolvers
├── graphql-m2/
│   ├── auth-service.js        # Magento 2 authentication
│   ├── product-service.js     # Magento 2 product service
│   └── config.js              # Magento 2 configuration
└── uploads/                   # Image upload directory
```

### Frontend Structure
```
react-app/
├── src/
│   ├── components/
│   │   ├── BannerSlider.jsx   # Banner carousel with Swiper
│   │   ├── Product.jsx        # Individual product card
│   │   ├── ProductForm.jsx    # Add product form
│   │   ├── VeniaProducts.jsx  # Venia products display
│   │   └── LoadingSpinner.jsx # Loading animation
│   ├── graphql/
│   │   ├── queries.js         # GraphQL queries
│   │   └── mutations.js       # GraphQL mutations
│   ├── utils/
│   │   └── htmlUtils.js       # HTML utility functions
│   ├── App.js                 # Main application component
│   ├── apollo-client.js       # Apollo Client configuration
│   └── index.js               # Application entry point
└── public/                    # Static assets
```

## 🛠️ Technologies Used

### Backend
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **Apollo Server**: GraphQL server
- **Multer**: File upload middleware
- **GraphQL**: Query language for APIs

### Frontend
- **React 18**: UI library
- **Apollo Client**: GraphQL client
- **Swiper**: Touch slider library
- **CSS3**: Modern styling
- **Fetch API**: HTTP requests

### External Services
- **Venia Magento 2**: Demo e-commerce store
- **MongoDB Atlas**: Cloud database (optional)

## 📊 API Endpoints

### GraphQL (Local Products)
- **Endpoint**: `POST /graphql`
- **Queries**: `GET_PRODUCTS`, `GET_BANNERS`
- **Mutations**: `ADD_PRODUCT`, `DELETE_PRODUCT`

### REST API (Venia Products)
- **Endpoint**: `GET /api/venia/products`


## 🎨 Features Breakdown

### Product Management
- **Local Products**: Full CRUD with GraphQL
- **Venia Products**: Read-only from Magento 2


### Banner System
- **Swiper Integration**: Modern carousel
- **Autoplay**: 5-second transitions
- **Navigation**: Custom buttons and pagination
- **Responsive**: Mobile-friendly design
- **Dynamic Content**: Title, description, images