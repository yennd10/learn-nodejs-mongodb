# React Products App

Ứng dụng React để hiển thị danh sách sản phẩm từ API Node.js.

## Tính năng

- Hiển thị danh sách sản phẩm từ API
- Responsive design
- Loading spinner khi tải dữ liệu
- Error handling
- Modern UI với hover effects

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy ứng dụng:
```bash
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:3001` (port 3000 đã được sử dụng bởi Node.js server).

## Cấu trúc

- `src/App.js` - Component chính
- `src/components/Product.js` - Component hiển thị sản phẩm
- `src/components/LoadingSpinner.js` - Component loading
- `src/App.css` - Styles cho App component
- `src/components/Product.css` - Styles cho Product
- `src/components/LoadingSpinner.css` - Styles cho LoadingSpinner

## API

Ứng dụng fetch dữ liệu từ endpoint: `http://localhost:3000/api/products`

Response format:
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "title": "Product Name",
      "price": 99.99,
      "description": "Product description",
      "imageUrl": "image_url"
    }
  ],
  "message": "Products retrieved successfully"
}
``` 