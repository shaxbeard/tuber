const Vendor = require("../models/Vendor");

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
      res.render("vendor.ejs", { vendor: vendor });
    } catch (err) {
      console.log(err);
    }
  },
};
