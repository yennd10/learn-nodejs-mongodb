# Node.js MongoDB Products API với React Frontend

Project này bao gồm:
1. **Backend API** (Node.js + Express + MongoDB) - Cung cấp API để quản lý sản phẩm
2. **Frontend React App** - Hiển thị danh sách sản phẩm từ API

## Cấu trúc Project

```
learn-nodejs-mongodb/
├── app.js                 # Server chính
├── routes/web.js          # Routes cho web và API
├── controllers/           # Controllers
├── models/               # MongoDB models
├── views/                # EJS templates
├── react-app/            # React frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   └── ...
│   └── package.json
└── README.md
```

## API Endpoints

### GET /api/products
Trả về danh sách tất cả sản phẩm dạng JSON

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "product_id",
      "title": "Product Name",
      "price": 99.99,
      "description": "Product description",
      "imageUrl": "image_url"
    }
  ],
  "message": "Products retrieved successfully"
}
```

## Cách chạy

### 1. Backend (Node.js API)
```bash
# Cài đặt dependencies
npm install

# Chạy server
node app.js
```
Server sẽ chạy tại `http://localhost:3000`

### 2. Frontend (React App)
```bash
# Di chuyển vào thư mục React app
cd react-app

# Cài đặt dependencies
npm install

# Chạy React app
npm start
```
React app sẽ chạy tại `http://localhost:3001`

## Tính năng

### Backend
- RESTful API với Express
- MongoDB với Mongoose
- File upload với Multer
- CORS support cho frontend

### Frontend (React)
- Fetch data từ API
- Responsive design
- Loading states
- Error handling
- Modern UI với hover effects

## Database

Sử dụng MongoDB Atlas với connection string:
```
mongodb+srv://yennd10:admin123@cluster0.6jtpzwk.mongodb.net/shop
```

## Models

### Product
- title: String
- price: Number
- description: String
- imageUrl: String

connect MongoDB:
mongodb+srv://yennd10:admin123@cluster0.6jtpzwk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
MongoClient.connect('mongodb+srv://yennd10:admin123@cluster0.6jtpzwk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

add link: <link rel="stylesheet" href="/css/style.css">
add script: <script src="/js/theme.js"></script>

1. app.js
2. routes/web.js add method in controller to routes.
3. productController render file .ejs in views folder, hanlder methods.
4. add-product post data by form action /add-product in edit-product.ejs
5. /edit-product/<%= product._id %>?edit=true send productId and ?edit param, post data 6. by from action /edit-product in edit-product.ejs
7. app.js => routes/web.js router => productController
8. https://api.weatherstack.com/current?access_key=c2833c671f0c2e841887df603dbdfdce&query=20.94944,105.84333