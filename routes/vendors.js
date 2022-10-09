const express = require("express");
const router = express.Router();
const vendorsController = require("../controllers/vendors");

const Product = require("../models/Product");
const Cart = require("../models/cart");

//In the future maybe add routes for the vendors to do their own admin
// /createVendor
// /deleteVendor

router.get("/:id", vendorsController.getVendor);

router.get("/add-to-cart/:id-:vendor", function (req, res, next) {
  console.log(req.params);
  let productId = req.params.id;
  let vendorId = req.params.vendor;
  console.log("vendor id is here: ", vendorId);
  let cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, function (err, product) {
    if (err) {
      //   return res.redirect("/");
      console.log(err);
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect(`/vendor/${vendorId}`); // We need to return to the vendor route?
    // res.redirect("/"); // We need to return to the vendor route?
  });
});

module.exports = router;
