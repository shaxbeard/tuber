const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const vendorsController = require("../controllers/vendors");
const Cart = require("../models/cart");

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/vendors", vendorsController.getVendors);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

router.get("/clear-cart", function (req, res, next) {
  let vendorId;
  req.session.cart = null;
  res.redirect(`/vendors`);
});

router.get("/shopping-cart", function (req, res, next) {
  if (!req.session.cart) {
    return res.render("shopping-cart.ejs", { products: null });
  }
  let cart = new Cart(req.session.cart);
  res.render("shopping-cart.ejs", {
    products: cart.generateArray(),
    totalPrice: cart.totalPrice,
    vendorId: cart.vendorId,
  });
});

module.exports = router;
