# GraphQL API với React App

Dự án này đã được tích hợp GraphQL API để thay thế REST API truyền thống. GraphQL cung cấp một cách hiệu quả hơn để truy vấn và cập nhật dữ liệu.

## 🚀 Tính năng

### Backend (Node.js + GraphQL)
- **Apollo Server v4**: GraphQL server hiện đại
- **MongoDB + Mongoose**: Database và ODM
- **GraphQL Schema**: Định nghĩa types cho Product và Banner
- **Resolvers**: Xử lý queries và mutations
- **Error Handling**: Xử lý lỗi toàn diện

### Frontend (React + Apollo Client)
- **Apollo Client**: GraphQL client cho React
- **Real-time Updates**: Tự động cập nhật UI khi data thay đổi
- **Optimistic UI**: Cải thiện trải nghiệm người dùng
- **Error Handling**: Xử lý lỗi graceful

## 📁 Cấu trúc dự án

```
learn-nodejs-mongodb/
├── graphql/
│   ├── schema.js          # GraphQL schema definitions
│   ├── resolvers.js       # GraphQL resolvers
│   └── server.js          # Apollo Server setup
├── react-app/
│   ├── src/
│   │   ├── apollo-client.js    # Apollo Client configuration
│   │   ├── graphql/
│   │   │   ├── queries.js      # GraphQL queries
│   │   │   └── mutations.js    # GraphQL mutations
│   │   └── components/
│   │       ├── BannerSlider.js # Banner component với GraphQL
│   │       └── ProductForm.js  # Form tạo product với GraphQL
│   └── package.json
├── app.js                 # Express app với GraphQL integration
└── test-graphql.js        # Test file cho GraphQL API
```

## 🛠️ Cài đặt và chạy

### 1. Backend Setup
```bash
# Cài đặt dependencies
npm install

# Chạy server
npm start
```

Server sẽ chạy tại `http://localhost:3000`
GraphQL endpoint: `http://localhost:3000/graphql`

### 2. Frontend Setup
```bash
# Di chuyển vào thư mục React app
cd react-app

# Cài đặt dependencies
npm install

# Chạy React app
npm start
```

React app sẽ chạy tại `http://localhost:3001`

## 📊 GraphQL Schema

GrapQL hoạt động với 3 loại truy vấn: Query, Mutation, Subscription

### Types
```graphql
type Product {
  _id: ID!
  title: String!
  price: Float!
  description: String!
  imageUrl: String!
}

type Banner {
  _id: ID!
  imageUrl: String!
  title: String!
  description: String!
  bannerUrl: String!
}
```

### Queries
```graphql
# Lấy tất cả products
query {
  products {
    _id
    title
    price
    description
    imageUrl
  }
}

# Lấy product theo ID
query {
  product(id: "product_id") {
    _id
    title
    price
    description
    imageUrl
  }
}

# Lấy tất cả banners
query {
  banners {
    _id
    imageUrl
    title
    description
    bannerUrl
  }
}
```

### Mutations
```graphql
# Tạo product mới
mutation {
  createProduct(productInput: {
    title: "New Product"
    price: 29.99
    description: "Product description"
    imageUrl: "https://example.com/image.jpg"
  }) {
    _id
    title
    price
  }
}

# Cập nhật product
mutation {
  updateProduct(id: "product_id", productInput: {
    title: "Updated Product"
    price: 39.99
    description: "Updated description"
    imageUrl: "https://example.com/new-image.jpg"
  }) {
    _id
    title
    price
  }
}

# Xóa product
mutation {
  deleteProduct(id: "product_id")
}
```

## 🧪 Testing

Chạy test file để kiểm tra GraphQL API:

```bash
node test-graphql.js
```

## 🎯 Tính năng chính

### 1. **Products Management**
- Hiển thị danh sách products
- Thêm product mới qua form
- Real-time updates khi thêm product

### 2. **Banners Management**
- Hiển thị banners trong slider
- Responsive design
- Smooth animations

### 3. **GraphQL Benefits**
- **Single Request**: Lấy nhiều resources trong 1 request
- **Type Safety**: Schema validation
- **Real-time**: Apollo Client cache management
- **Flexible**: Client chỉ định fields cần thiết

## 🔧 Development

### Thêm Type mới
1. Cập nhật `graphql/schema.js`
2. Thêm resolvers trong `graphql/resolvers.js`
3. Tạo queries/mutations trong React app
4. Tạo components để sử dụng

### Error Handling
- GraphQL errors được handle ở cả backend và frontend
- User-friendly error messages
- Retry mechanisms

## 📱 Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions

## 🚀 Performance
- Apollo Client caching
- Optimistic UI updates
- Lazy loading components
- Efficient re-renders

## 🔒 Security
- Input validation
- Error sanitization
- CORS configuration
- MongoDB injection protection

## 📈 Monitoring
- GraphQL error logging
- Performance metrics
- Query complexity analysis

---

**Lưu ý**: Đảm bảo MongoDB đang chạy và connection string được cấu hình đúng trong `app.js` 

Backend (Node.js + GraphQL)
✅ Apollo Server v4 - Modern GraphQL server
✅ GraphQL Schema - Defined types for Product and Banner
✅ Resolvers - Complete CRUD operations
✅ Error Handling - Comprehensive error management
✅ MongoDB Integration - Using existing Mongoose models
Frontend (React + Apollo Client)
✅ Apollo Client - GraphQL client for React
✅ GraphQL Queries - For fetching products and banners
✅ GraphQL Mutations - For creating, updating, deleting
✅ Real-time Updates - Automatic UI refresh
✅ New Components:
BannerSlider - Displays banners from GraphQL
ProductForm - Add new products via GraphQL mutations
Key Features Implemented
📊 GraphQL Schema
Product and Banner types
Queries for fetching data
Mutations for CRUD operations
🔧 GraphQL Resolvers
All database operations
Error handling
Type safety
⚛️ React Integration
Apollo Client setup
GraphQL queries and mutations
Real-time data updates
Optimistic UI
�� UI Components
Banner slider with GraphQL data
Product form with GraphQL mutations
Responsive design
Modern styling