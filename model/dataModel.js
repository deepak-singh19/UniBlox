// Define a class for a cart item


class CartItem {
    constructor(productId, quantity, price) {
      this.productId = productId;   // Product ID
      this.quantity = quantity;     // Quantity of this item in the cart
      this.price = price;           // Price of this item
    }
  }
  
  // Define a class for an order


  class Order {
    constructor(orderId, cartItems, totalAmount, discountCode) {
      this.orderId = orderId;       // Order ID
      this.cartItems = cartItems;   // An array of cart items
      this.totalAmount = totalAmount; // Total order amount
      this.discountCode = discountCode; // Discount code applied to the order
    }
  }
  
  
  // Initialize objects and data
  
  const cart = {}; // The user's shopping cart (initially empty)
  let totalDiscountAmount = {
    discount: 0 // Initialize the total discount amount to 0
  };
  
  const orders = []; // An array to store completed orders
  
  const discountCodes = {
    "HOLI10": 10 // Predefined discount code with a value of 10
  };
  
const Items=[
    {
      id:"1",
      name: "Sweet Mango",
      price: 85,
      qty: 10,
      category: "Fruits",
      desc: "It is mango Season who doesn't love that",
      avl: "pcs"
    },
    {
      id:"2",
      name: "Seedless Grapes",
      price: 3.75,
      qty: 10,
      category: "Fruits",
      desc: "Yummy brands seedless grapes 900g",
      avl: "kg"
    },
    {
      id:"3",
      name: "Juicy Figs",
      price: 4,
      qty: 10,
      category: "Fruits",
      desc: "Best figs for cooking 140g ",
      avl:"kg",
    },
    {
        id:"10",
      name: "Coke",
      price: 8,
      qty: 10,
      category: "Drinks",
      desc: "",
      avl:"pcs"
    },
    {
      id:"4",
      name: "Dew",
      price: 8.5,
      qty: 10,
      category: "Drinks",
      desc: "",
      avl:"pcs"
    },
    {
      id:"5",
      name: "Fanta",
      price: 7.5,
      qty: 10,
      category: "Drinks",
      desc: "",
      avl:"pcs"
    },
    {
      id:"6",
      name: "Cupcake",
      price: 6.5,
      qty: 10,
      category: "Bakery",
      desc: "Vanilla Cupcake 100g",
      avl:"pcs"
    },{
      id:"7",
      name: "Choclate cake",
      price: 20,
      qty: 10,
      category: "Bakery",
      desc: "Choclate Cake with choco chip 2 pounds"
    }
  ]

  module.exports = { CartItem, Order , cart,Items, orders, discountCodes, totalDiscountAmount};