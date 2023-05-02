export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inOffer: boolean;
  offerPirce: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  category: string;
  image: string;
}
