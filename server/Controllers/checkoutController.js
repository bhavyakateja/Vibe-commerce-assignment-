import Cart from "../Models/cartModel.js";
import Receipt from "../Models/receiptModel.js";

export const checkout = async (req, res) => {
  const { cartItems, name, email } = req.body;

  try {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const receipt = new Receipt({
      customer: { name, email },
      total
    });

    const savedReceipt = await receipt.save();

    await Cart.deleteMany({});

    res.status(200).json({ 
      success: true,
      message: "Checkout successful", 
      receipt: savedReceipt
    });

  } catch (error) {
    res.status(500).json({ message: "Checkout failed", error });
  }
};