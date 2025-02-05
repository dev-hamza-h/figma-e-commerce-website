import { groq } from "next-sanity";
import sanityClient from "@/lib/sanity.client";

// Product Interface
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
  *[_type == "products"][0...4] {
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
  *[_type == "products"][4...8] {
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

// Query for Ymight Selling Products
const query3 = groq`
  *[_type == "products"][8...12] {
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

// Query for All Product Button Selling Products
const query4 = groq`
  *[_type == "products"][0...12] {
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


// ✅ **NEW**: Query for Single Product by ID
const productQuery = groq`
  *[_type == "products" && _id == $id][0] {
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

// Fetch New Arrivals
export const fetchNewArrivals = async (): Promise<Product[]> => {
  return await sanityClient.fetch(query);
};

// Fetch Top Rated Products
export const fetchTopRatedProducts = async (): Promise<Product[]> => {
  return await sanityClient.fetch(query2);
};

// Fetch YmightProduct
export const fetchYMightProducts = async (): Promise<Product[]> => {
  return await sanityClient.fetch(query3);
};

// Fetch ShopProduct
export const fetchShopbtn = async (): Promise<Product[]> => {
  return await sanityClient.fetch(query4);
};

// ✅ **NEW**: Fetch Single Product by ID
export const fetchProductById = async (id: string): Promise<Product | null> => {
  return await sanityClient.fetch(productQuery, { id });
};


