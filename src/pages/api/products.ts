import type { NextApiRequest, NextApiResponse } from "next";
import { fetchNewArrivals, fetchTopRatedProducts, fetchYMightProducts, fetchShopbtn} from "@/utils/fetchProduct";  
import { Product } from "@/utils/fetchProduct";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const { type } = req.query;  

  try {
    let products: Product[] = [];

    // Check type and call corresponding fetch function
    if (type === "topRated") {
      products = await fetchTopRatedProducts();  
    } else if (type === "might") {
      products = await fetchYMightProducts();  // Fetch Might Products
    }
    else if (type === "shopbtn") {
      products = await fetchShopbtn();  
    } else {
      products = await fetchNewArrivals(); 
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json([]);  
  }
}
