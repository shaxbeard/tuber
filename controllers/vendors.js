const Vendor = require("../models/Vendor");
const Product = require("../models/Product");

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
      // res.redirect(`/shopping-cart`);
    } catch (err) {
      console.log(err);
    }
  },
};
