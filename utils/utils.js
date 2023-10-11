const {Items, discountCodes}= require("../model/dataModel");
function getPriceById(productId) {
    const product = Items.find(item => item.id == productId);
    if (product) {
      return product.price;
    }
    return null; 
}

function getDiscountAmountByDiscountCode(discountCode) {
    console.log(discountCode);
  
    if (discountCode in discountCodes) {
      return discountCodes[discountCode];
    } else {
      return null;
    }
  }

  module.exports={getPriceById, getDiscountAmountByDiscountCode}