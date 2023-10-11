const { CartItem, Order, cart, Items,hasDiscount, orders, discountCodes } = require("../../model/dataModel");
const {getPriceById} = require("../../utils/utils");

const addToCart = (req, res) => {
  const { productId, quantity } = req.body;

  try {
    if (!productId || !quantity || quantity <= 0) {
      return res.status(400).json({ message: "Invalid request." });
    }

    // console.log(productId);
    const itemPrice = getPriceById(productId);
  

    if (cart[productId]) {
      cart[productId] += quantity;
      cart.price += itemPrice * quantity; // Accumulate the total price
    } else {
      cart[productId] = quantity;
      if (!cart.price) {
        cart.price = 0;
      }
      cart.price += itemPrice * quantity; // Initialize and accumulate the total price
    }

    res.json({ message: "Item added to cart.", cart: cart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = addToCart;




