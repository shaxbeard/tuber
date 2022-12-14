const Vendor = require("../models/Vendor");
const Product = require("../models/Product");
const Cart = require("../models/cart");

module.exports = {
  getVendors: async (req, res) => {
    try {
      const vendors = await Vendor.find().lean();
      res.render("vendors.ejs", { vendors: vendors });
    } catch (err) {
      console.log(err);
    }
  },
  getVendor: async (req, res) => {
    try {
      const vendor = await Vendor.findById(req.params.id);
      const products = await Product.find().lean();
      // console.log(
      //   "THIS IS THE VENDOR OBJECT PASSED TO THE VANDOR.EJS PAGEXS",
      //   vendor
      // );
      res.render("vendor.ejs", { vendor: vendor, products: products });
    } catch (err) {
      console.log(err);
    }
  },
  clearCart: async (req, res) => {
    try {
      req.session.cart = null;
      res.redirect(`/vendors`);
    } catch (err) {
      console.log(err);
    }
  },
  getCart: async (req, res) => {
    try {
      if (!req.session.cart) {
        return res.render("shopping-cart.ejs", { products: null });
      }
      let cart = new Cart(req.session.cart);
      res.render("shopping-cart.ejs", {
        products: cart.generateArray(),
        totalPrice: cart.totalPrice,
        vendorId: cart.vendorId,
      });
    } catch (err) {
      console.log(err);
    }
  },
  addToCart: async (req, res) => {
    try {
      let productId = req.params.id;
      let vendorId = req.params.vendor;
      let cart = new Cart(req.session.cart ? req.session.cart : {});

      Product.findById(productId, function (err, product) {
        if (err) {
          //   return res.redirect("/");
          console.log(err);
        }
        cart.add(product, product.id, vendorId);
        req.session.cart = cart;
        // console.log(req.session.cart);
        res.redirect(`/vendor/${vendorId}`); // We need to return to the vendor route?
      });
    } catch (err) {
      console.log(err);
    }
  },
};
