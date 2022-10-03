const express = require("express");
const router = express.Router();
const vendorsController = require("../controllers/vendors");

const Product = require("../models/Product");
const Cart = require("../models/cart");

//In the future maybe add routes for the vendors to do their own admin
// /createVendor
// /deleteVendor

router.get("/:id", vendorsController.getVendor);

router.get("/add-to-cart/:id", function (req, res, next) {
  const productId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : { items: {} });

  Product.findById(productId, function (err, product) {
    if (err) {
      return res.redirect("/");
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect("/");
  });
});

module.exports = router;
