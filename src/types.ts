export interface Product {
  productVariantId: string;
  productName: string;
  description: string;
  productAsset: {
    preview: string;
  };
  price: {
    value: number;
  };
  currencyCode: string;
}

export interface QueryData {
  search: {
    items: Product[];
  };
}

export interface QueryVariables {
  input: {
    collectionSlug: string;
    groupByProduct: boolean;
    skip: number;
    take: number;
  };
}
