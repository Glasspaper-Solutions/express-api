const { getProducts } = require("../controllers/products.controller")

module.exports = (app) => {
    app.get('/products', getProducts)/* ,
    app.get('/products/:id'),
    app.post('/products'),
    app.delete('/products/:id') */
}