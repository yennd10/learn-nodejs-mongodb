const express = require('express');
const mongoose = require('mongoose');
// import GraphQL server
const { createApolloServer } = require('./graphql/server');
const { expressMiddleware } = require('@apollo/server/express4');
//ultil
const path = require('path');
const bodyParser = require('body-parser');
const multer = require('multer');


const app = express();

// cho phép render cod ejs trong folder views
app.set('view engine', 'ejs');
app.set('views', 'views');

// import các routes
const webRoutes = require('./routes/web');

// set Hearder cho phép client thực hiện các request đến server
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// khởi tạo và chạy server  http://localhost:8080/graphql endpoint
const startApolloServer = async () => {
  const server = createApolloServer();
  await server.start();
  app.use('/graphql', express.json(), expressMiddleware(server));
};

// connect MongoDB, gọi routes, set listen port
mongoose
  .connect(
    'mongodb+srv://yennd10:admin123@cluster0.6jtpzwk.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(result => {
    startApolloServer().then(() => {
      app.use('/', webRoutes);

      app.use((req, res, next) => {
        res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
      });

      app.listen(8080);
    });
  })
  .catch(err => {
    console.log(err);
  });

// multer sử dụng cho upload file
// khai báo /uploads path
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// kiểm tra images file type
const fileFilter = (req, file, cb) => {
  // check if the file is an image
  //if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') 
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload an image.'), false);
  }
};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('imageUrl'));

// xử lý error upload
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large' });
    }
  }
  if (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
  next();
});
