const express = require("express");
const router = express.Router();
const vendorsController = require("../controllers/vendors");

router.get("/:id", vendorsController.getVendor);
router.get("/add-to-cart/:id-:vendor", vendorsController.addToCart);

module.exports = router;
