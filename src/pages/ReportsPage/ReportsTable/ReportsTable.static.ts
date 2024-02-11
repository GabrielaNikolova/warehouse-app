interface BestSellingProducts {
    id: string;
    name: string;
    quantity: number;
    error?: string;
}

interface BestClient {
    id: string;
    name?: string;
    orders?: number;
    error?: string;
}

interface HighestAvailableProduct {
    product_id: string;
    product?: string;
    warehouse_id: string;
    warehouse?: string;
    available_quantity?: number;
    error?: string;
}

export type { BestClient, BestSellingProducts, HighestAvailableProduct };
