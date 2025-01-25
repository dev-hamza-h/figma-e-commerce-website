import { groq } from "next-sanity";
import sanityClient from "@/lib/sanity.client";

export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  category: string;
  discountPercent?: number;
  new?: boolean;
  colors?: string[];
  sizes?: string[];
}

// Query for New Arrivals
const query = groq`
  *[_type == "products" ][0...4]{
    _id,
    name,
    price,
    description,
    "image": image.asset->url,
    rating,
    category,
    discountPercent,
    new,
    colors,
    sizes
  }
`;

// Query for Top Selling Products
const query2 = groq`
  *[_type == "products"][4...8]{
    _id,
    name,
    price,
    description,
    "image": image.asset->url,
    rating,
    category,
    discountPercent,
    new,
    colors,
    sizes
  }
`;

// Fetch function for New Arrivals
export const fetchNewArrivals = async (): Promise<Product[]> => {
  const products: Product[] = await sanityClient.fetch(query);
  return products;
};

// Fetch function for Top Selling Products
export const fetchTopRatedProducts = async (): Promise<Product[]> => {
  const products: Product[] = await sanityClient.fetch(query2);
  return products;
};
