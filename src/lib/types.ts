export interface Product {
  SKU: number;
  Name: string;
  Description: string;
  Brand: string;
  Title: string;
  Gender: string;
  RETAIL: null;
  "Cost Price": number;
  Image_1: string;
  URL: string;
  Quantity: number;
  size: string;
  UPC: null;
  catalog_time: string;
  supplier: string;
}

export interface IGetProductParams {
  supplier: TSupplier;
  first?: number;
  last?: string;
  search?: string;
}

export type TSupplier = "FragranceX" | "FragranceNet" | "Morris Costumes";
