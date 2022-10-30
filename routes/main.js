const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const vendorsController = require("../controllers/vendors");

const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

router.get("/vendors", vendorsController.getVendors);
router.get("/clear-cart", vendorsController.clearCart);
router.get("/shopping-cart", vendorsController.getCart);

module.exports = router;
