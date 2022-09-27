const Vendor = require("../models/Vendor");

var mongoose = require("mongoose");

mongoose.connect("localhost:2101/feed");

const vendors = [
  new Vendor({
    name: "Sweet Times Berry Patch",
    imagePath:
      "https://res.cloudinary.com/dewbhwqgu/image/upload/v1664243034/sweet-times-berry-atch_j64nam.jpg",
    cloudinaryId: "sweet-times-berry-atch_j64nam",
    location: "42 Palmerston Blvd",
  }),
  new Vendor({
    name: "Wendy's Raspberries",
    imagePath:
      "https://res.cloudinary.com/dewbhwqgu/image/upload/v1664243034/raspberry-garden_qvdnaf.jpg",
    cloudinaryId: "raspberry-garden_qvdnaf",
    location: "12 Mississauga Blvd",
  }),
  new Vendor({
    name: "Maeve's Rhubarb Realm",
    imagePath:
      "https://res.cloudinary.com/dewbhwqgu/image/upload/v1664243034/rhubarb-garden_dmihvz.jpg",
    cloudinaryId: "rhubarb-garden_dmihvz",
    location: "46 Cedarvale Ave",
  }),
  new Vendor({
    name: "Tatiana's Heirloom Tomatoes",
    imagePath:
      "https://res.cloudinary.com/dewbhwqgu/image/upload/v1664243034/heirloom-tomato-garden_lzlrry.jpg",
    cloudinaryId: "heirloom-tomato-garden_lzlrry",
    location: "123 Elm St",
  }),
];

var done = 0;
for (var i = 0; i < vendors.length; i++) {
  vendors[i].save(function (err, results) {
    done++;
    if (done === vendors.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
