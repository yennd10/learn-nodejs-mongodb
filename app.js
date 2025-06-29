const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

// const mongoConnect = require('./util/database').mongoConnect;
const mongoose = require('mongoose');

// GraphQL imports
const { createApolloServer } = require('./graphql/server');
const { expressMiddleware } = require('@apollo/server/express4');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const webRoutes = require('./routes/web');

// Add CORS middleware
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



// Configure multer for file uploads
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

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

// Error handling for file uploads
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

// Initialize and start Apollo Server
const startApolloServer = async () => {
  const server = createApolloServer();
  await server.start();

  // Apply Apollo Server middleware to Express app
  app.use('/graphql', express.json(), expressMiddleware(server));

  console.log('GraphQL server ready at http://localhost:8080/graphql');
};

// Start Apollo Server first, then apply other routes
mongoose
  .connect(
    'mongodb+srv://yennd10:admin123@cluster0.6jtpzwk.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(result => {
    startApolloServer().then(() => {
      // Apply web routes after GraphQL
      app.use('/', webRoutes);

      // 404 handler should be last
      app.use((req, res, next) => {
        res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
      });

      app.listen(8080);
      console.log('Server is running on port 8080');
    });
  })
  .catch(err => {
    console.log(err);
  });
