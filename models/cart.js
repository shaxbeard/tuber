module.exports = function Cart(oldCart) {
  //Wait - I also need to store the Vendor ID in the cart somewhere too
  //Max's demo was for a single vendor - so he didn't need to have a vendor ID anywhere
  this.items = oldCart.items || {};
  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0;
  this.vendorId = "";

  this.add = function (item, id, vendorId) {
    let storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
    }
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price;
    this.vendorId = vendorId;
    console.log("The vendor id from the cart model", vendorId);
  };

  this.generateArray = function () {
    let arr = [];
    for (let id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};
