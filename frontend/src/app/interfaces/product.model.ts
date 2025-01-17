export interface Product {
  id: number;
  sku: string;
  name: string;
  description: string;
  unitPrice: number;
  imageUrl: string;
  active: number;
  unitsInStock: number;
  dateCreated: Date;
  lastUpdated: Date;
}
