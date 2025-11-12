interface ProductOrigin{
    origin: string;
}

const ProductOrigin = (props: ProductOrigin) => {
    const {origin} = props
    
    return (
        <div className="flex items-center justify-between gap-3">
            <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{origin}</p>
        </div>
    )
}

export default ProductOrigin;