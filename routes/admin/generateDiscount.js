const { CartItem, Order, cart, orders, discountCodes, totalDiscountAmount } = require("../../model/dataModel");

// Function to generate a discount code
const generateDiscount = (req, res) => {
  try {
    const { discountCode, discountAmount } = req.body;
    
    if (!discountCode || !discountAmount) {
      return res.status(400).json({ message: "Invalid discount data." });
    }
    
    discountCodes[discountCode] = discountAmount;
    
    res.json({ message: 'Discount code generated.', code: discountCode, discountCodes });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while generating the discount code." });
  }
};

// Function to calculate order statistics
const orderStats = (req, res) => {
  try {
    let itemCount = [];
    let itemValue = 0;
    let discount = 0;

    orders.forEach((ord) => {
      itemCount = itemCount.concat(Object.values(ord.cartItems));
      if (ord.discountCode) {
        discount++;
      }
    });

    itemCount.forEach((count) => {
      itemValue += count;
    });

    const totalAmount = orders.reduce((acc, order) => acc + order.totalAmount, 0);

    res.json({
      itemCount: itemValue,
      totalAmount,
      discountCodes,
      totalDiscountAmount: totalDiscountAmount.discount,
    });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while calculating order statistics." });
  }
};

module.exports = {
  generateDiscount,
  orderStats,
};