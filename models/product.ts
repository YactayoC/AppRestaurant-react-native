export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inOffer: boolean;
  offerPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  category: string;
  image: string;
}
