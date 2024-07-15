const express = require('express');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000

// Middleware
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Routes
const auth = require('./routes/auth.js')
const databaseQuery = require('./routes/databaseQuery.js')

const getUserData = require('./routes/get/getUserData.js')
const getCategories = require('./routes/get/getCategories.js')
const getProducts = require('./routes/get/getProducts.js')
const getProduct = require('./routes/get/getProduct.js')
const getProductOfCategory = require('./routes/get/getProductOfCategory.js')
const getFeaturedProduct = require('./routes/get/getFeaturedProduct.js')
const getDateSortedProducts = require('./routes/get/getDateSortedProducts.js')
const getRatingSortedProducts = require('./routes/get/getRatingSortedProducts.js')

const addCategory = require('./routes/add/addCategory.js')
const addProduct = require('./routes/add/addProduct.js')

const editCategory = require('./routes/edit/editCategory.js')
const editProduct = require('./routes/edit/editProduct.js')
const editUserSettings = require('./routes/edit/editUserSettings.js')

//Using routes
app.use('/', auth)
app.use('/', databaseQuery)

app.use('/', getUserData)
app.use('/', getCategories)
app.use('/', getProducts)
app.use('/', getProduct)
app.use('/', getProductOfCategory)
app.use('/', getFeaturedProduct)
app.use('/', getDateSortedProducts)
app.use('/', getRatingSortedProducts)

app.use('/', addCategory)
app.use('/', addProduct)

app.use('/', editCategory)
app.use('/', editProduct)
app.use('/', editUserSettings)


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
