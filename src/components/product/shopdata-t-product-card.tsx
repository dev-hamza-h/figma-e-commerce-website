import Image, { StaticImageData } from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { satoshi } from "@/app/ui/fonts";

interface ProductCardProps {
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string | StaticImageData;
  discount?: number;
}

export function ProductCard({
  title,
  price,
  originalPrice,
  rating,
  image,
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-4 space-y-2">
      <h3 className={cn("font-medium line-clamp-1", satoshi.className)}>
          {title}
        </h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              )}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
