# 🛍️ Products Store - React App

A modern e-commerce React application that displays products from both local MongoDB database and Venia Magento 2 store. Built with React, Apollo Client, and Swiper for a smooth user experience.

## ✨ Features

### 🏠 Local Products Management
- **Product Display**: Grid layout showing products from local MongoDB
- **Add Products**: Form to create new products with image upload
- **Product Details**: Title, SKU, price, description, and image
- **GraphQL Integration**: Apollo Client for data fetching and mutations

### 🌐 Venia Products Integration
- **Magento 2 Integration**: Fetch products from Venia demo store
- **Product Catalog**: Display products with pricing, stock status, and categories
- **Pagination**: Navigate through product pages
- **Search & Filter**: Find products by name or category

### 🎨 Modern UI/UX
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Tab Navigation**: Switch between Local and Venia products
- **Banner Slider**: Swiper-powered banner carousel with autoplay
- **Loading States**: Smooth loading animations
- **Error Handling**: User-friendly error messages

### 🎯 Banner System
- **Dynamic Banners**: Create and manage promotional banners
- **Swiper Slider**: Modern carousel with navigation and pagination
- **Autoplay**: Automatic slide transitions
- **Responsive**: Adapts to different screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB database
- Backend server running on port 8080

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3001`

## 📁 Project Structure

```
react-app/
├── public/
├── src/
│   ├── components/
│   │   ├── BannerSlider.jsx      # Banner carousel with Swiper
│   │   ├── BannerSlider.css
│   │   ├── LoadingSpinner.jsx    # Loading animation component
│   │   ├── LoadingSpinner.css
│   │   ├── Product.jsx           # Individual product card
│   │   ├── Product.css
│   │   ├── ProductForm.jsx       # Add product form
│   │   ├── ProductForm.css
│   │   ├── VeniaProducts.jsx     # Venia products display
│   │   └── VeniaProducts.css
│   ├── graphql/
│   │   ├── mutations.js          # GraphQL mutations
│   │   └── queries.js            # GraphQL queries
│   ├── utils/
│   │   └── htmlUtils.js          # HTML utility functions
│   ├── App.js                    # Main application component
│   ├── App.css
│   ├── apollo-client.js          # Apollo Client configuration
│   └── index.js                  # Application entry point
├── package.json
└── README.md
```

## 🛠️ Technologies Used

### Frontend
- **React 18**: Modern React with hooks and functional components
- **Apollo Client**: GraphQL client for data management
- **Swiper**: Touch slider for banner carousel
- **CSS3**: Modern styling with flexbox and grid

### Backend Integration
- **GraphQL**: Apollo Server for local products
- **REST API**: Fetch Venia products from Magento 2
- **MongoDB**: Local product storage
- **Express.js**: Backend server

## 📱 Features Breakdown

### Product Management
- **Local Products**: CRUD operations with GraphQL
- **Venia Products**: Read-only display from Magento 2
- **Image Upload**: Multer for file handling
- **Real-time Updates**: Apollo Client cache management

### Banner System
- **Swiper Integration**: Modern carousel functionality
- **Autoplay**: 5-second automatic transitions
- **Navigation**: Previous/Next buttons
- **Pagination**: Dot indicators
- **Responsive**: Mobile-friendly design

### User Interface
- **Tab Navigation**: Switch between product sources
- **Grid Layout**: Responsive product grid
- **Loading States**: Spinner animations
- **Error Handling**: Graceful error display
- **Responsive Design**: Mobile-first approach

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:8080
REACT_APP_GRAPHQL_URL=http://localhost:8080/graphql
```

### Apollo Client Setup
The Apollo Client is configured in `src/apollo-client.js` to connect to the GraphQL server.

## 📊 API Endpoints

### GraphQL (Local Products)
- `GET /graphql`: Apollo Server endpoint
- Queries: `GET_PRODUCTS`, `GET_BANNERS`
- Mutations: `ADD_PRODUCT`, `DELETE_PRODUCT`

### REST API (Venia Products)
- `GET /api/venia/products`: Fetch Venia products
- Parameters: `page`, `pageSize`
- Response: JSON with products data

## 🎨 Styling

### CSS Architecture
- **Component-based**: Each component has its own CSS file
- **Responsive**: Mobile-first design approach
- **Modern**: Flexbox and CSS Grid layouts
- **Animations**: Smooth transitions and hover effects

### Design System
- **Color Palette**: Blue gradient theme
- **Typography**: Clean, readable fonts
- **Spacing**: Consistent padding and margins
- **Shadows**: Subtle depth effects

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Serve Production Build
```bash
npm install -g serve
serve -s build -l 3001
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Venia Magento 2**: Demo store for product data
- **Swiper**: Touch slider library
- **Apollo GraphQL**: GraphQL client
- **React Community**: Amazing ecosystem

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Happy Coding! 🎉** 