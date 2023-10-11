const {
  CartItem,
  Order,
  orders,
  cart,
  cartQuantity,
  discountCodes,
  totalDiscountAmount
  
} = require("../../model/dataModel");
const { getDiscountAmountByDiscountCode } = require("../../utils/utils");


let orderCounter=0;
// Let's suppose evry 3th item should get 10% discount,]

const checkout = (req, res) => {
//   const { discountCode } = req.body; // for future if we want to take user define discountcode

const discountCode="HOLI10";


  try {
    if (discountCode) {
      // console.log(discountCode);
      const discountPercentage = getDiscountAmountByDiscountCode(discountCode);
        // console.log(discountPercentage);

      if (discountPercentage === null) {
        return res.status(400).json({ message: "Invalid discount code." });
      }

      // Apply the discount
        // console.log(cart.price);
        // console.log(orders.length);
      let discountAmount = 0;
      if (orders.length > 0 && orders.length % 2 == 0) {
        // console.log(cart.price);
        discountAmount = (cart.price * discountPercentage) / 100;
      }

      cart.price -= discountAmount;
      totalDiscountAmount.discount=totalDiscountAmount.discount+discountAmount;

    //   console.log(totalDiscountAmount);
    }

    // Create an order and reset the cart
    // console.log(cart);

    // console.log(item);
    const cartArr = {...cart};
    delete cartArr.price; 
    // This won't affect the original cart object
    
    // console.log(cartArr);
    const order = new Order(
      ++orderCounter,
      cartArr,
      cart.price,
      orders.length > 0 && orders.length % 2 == 0 ? discountCode : null,
    );
    orders.push(order);
    // console.log(cartArr);
    // console.log(orders.length);

    // console.log(orders);
    for (const productId in cart) {
      delete cart[productId];
    }

    res.json({ message: "Checkout successful.", order });
  } catch (error) {
    res.status(500).json({ message: "An error occurred during checkout." });
  }
};

module.exports = checkout;
