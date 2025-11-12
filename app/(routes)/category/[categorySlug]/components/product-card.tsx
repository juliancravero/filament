import IconButton from "@/components/icon-button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Expand, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ProductCardProps = {
    product: ProductType
}

const ProductCard = (props: ProductCardProps) => {
    const { product } = props
    const router = useRouter()
    
    return (
        <Link href={`/product/${product.attributes.slug}`}
        className="py-1 border border-gray-600 shadow-none bg-white/5 backdrop-blur-md rounded-md ">
            <div className="absolute flex items-center justify-between gap-3 px-2 z-[1] top-4">
                {/*<p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{product.attributes.productName}</p> */}
                <p className="px-2 py-1 text-xs text-white bg-primary rounded-full dark:bg-primary dark:text-black w-fit">{product.attributes.origin}</p>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm"  
            >
                <CarouselContent>
                    {product.attributes.images.data.map((image) => (
                        <CarouselItem key={image.id} className="group">
                            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.attributes.url}`}
                            alt = "Image"
                            className="rounded-xl"
                            />
                            <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                <div className="flex justify-center gap-x-6">
                                    <IconButton onClick={() => router.push(`/product/${product.attributes.slug}`)} icon={<Expand size={20} className="text-gray-600" />} />
                                    <IconButton onClick={() => console.log("Expand product")} icon={<ShoppingCart size={20} className="text-gray-600" />} />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <p className="text-w-xl text-center">{product.attributes.productName}</p>
            <p className="font-bold text-center">{formatPrice(product.attributes.price)}</p>
       </Link>
    );
}

export default ProductCard;