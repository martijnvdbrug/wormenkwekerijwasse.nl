export interface ParcelInput {
    name: string;
    company_name?: string;
    address: string;
    house_number: string;
    city: string;
    postal_code: string;
    country: string;
    telephone?: string;
    request_label: boolean;
    email?: string;
    order_number?: string;
    parcel_items: ParcelInputItem[];
}

export interface ParcelInputItem {
    description: string;
    quantity: number;
    weight: string;
    sku: string;
    value: string;
   // properties: { [key: string]: string }[];
}

