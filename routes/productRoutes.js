const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = (app) => {

  app.post(`/api/product`, async (req, res) => {
    let product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
  })
}