import Cart from "../Models/cartModel.js";
import Product from "../Models/productModel.js";

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({});
    if (!cart) {
        return res.status(400).json({
            success: false,
            message: "No items in your cart",
            items: [], 
            total: 0 
        });
    }
    res.status(200).json({
        success: true,
        message: "Products in cart",
        cart
    });
  } catch (error) {
    res.status(500).json({
        success: false,
        message: "Error fetching cart",
        error 
    });
  }
};


export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product) {
        return res.status(404).json({ 
            success: false,
            message: "Product not found" 
        });
    }

    let cart = await Cart.findOne({});
    if (!cart) {
        cart = new Cart({ items: [], total: 0 });
    }

    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    cart.total = await calculateTotal(cart);
    await cart.save();

    res.status(200).json({
        success: true,
        message: "Cart items",
        cart
    });
  } catch (error) {
    res.status(500).json({
        success: false,
        message: "Error adding to cart",
        error
    });
  }
};

export const removeFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await Cart.findOne({});
    if (!cart) {
        return res.status(404).json({ 
            success: false,
            message: "Cart not found" 
        });
    }

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== id
    );

    cart.total = await calculateTotal(cart);
    await cart.save();

    res.status(200).json({
        success: true,
        message: "Cart items",
        cart
    });
  } catch (error) {
    res.status(500).json({ message: "Error removing item", error });
  }
};

const calculateTotal = async (cart) => {
  let total = 0;
  for (const item of cart.items) {
    const product = await Product.findById(item.productId);
    total += product.price * item.quantity;
  }
  return total;
};