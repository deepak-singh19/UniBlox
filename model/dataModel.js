class CartItem {
    constructor(productId, quantity, price) {
      this.productId = productId;
      this.quantity = quantity;
      this.price= price;
    }
  }
  
  class Order {
    constructor(orderId, cartItems, totalAmount, discountCode ) {
      this.orderId = orderId;
      this.cartItems = cartItems;
      this.totalAmount = totalAmount;
      this.discountCode = discountCode;
    
    }
  }

const cart = {};
let totalDiscountAmount={
    discount:0
};
const orders = [];
const discountCodes = {
    "HOLI10": 10
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