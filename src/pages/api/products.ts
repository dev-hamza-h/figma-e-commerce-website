import type { NextApiRequest, NextApiResponse } from "next";
import { fetchNewArrivals } from "@/utils/fetchProduct";
import { fetchTopRatedProducts } from "@/utils/fetchProduct";  
import { Product } from "@/utils/fetchProduct";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const { type } = req.query;  

  try {
    let products: Product[];

 
    if (type === "topRated") {
      products = await fetchTopRatedProducts();  
    } else {
      products = await fetchNewArrivals(); 
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.status(500).json([]);  
  }
}
