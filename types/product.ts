export type ProductType = {
    id: number;
    attributes: {
        productName: string;
        description: string;
        slug: string;
        active: boolean;
        isFeatured: boolean;
        origin: string;
        price: number;
        images: {
            data: {
                id: number;
                attributes: {
                    url: string;
                }
            }[]
        };
        category: {
            data: {
                attributes: {
                    slug: string;
                    categoryName: string;
                }
            }
        };
    };
};