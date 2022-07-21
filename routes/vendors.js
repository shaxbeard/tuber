const express = require("express");
const router = express.Router();
const vendorsController = require("../controllers/vendors");

//In the future maybe add routes for the vendors to do their own admin
// /createVendor
// /deleteVendor

router.get("/:id", vendorsController.getVendor);

module.exports = router;
