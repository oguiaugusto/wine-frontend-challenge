export interface IProduct {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
  type: string;
  classification: string;
  size?: string;
  volume?: string;
  rating: number;
  avaliations: number;
  country: string;
  region: string;
  flag: string;
  sommelierComment: string;
}

export interface IProductsResponse {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  items: IProduct[];
}
