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