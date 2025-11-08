import axios from "axios";

const DUMMYJSON_BASE_URL = "https://dummyjson.com";

export const getProducts = async (req, res) => {
  try {
    const response = await axios.get(`${DUMMYJSON_BASE_URL}/products?limit=200`);
    console.log(response.data.products);
    res.status(200).json(response.data.products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({
      success: false,
      message: "Error fetching products from DummyJSON API",
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${DUMMYJSON_BASE_URL}/products/${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching product details:", error.message);
    res.status(500).json({
      success: false,
      message: "Error fetching product details from DummyJSON API",
    });
  }
};