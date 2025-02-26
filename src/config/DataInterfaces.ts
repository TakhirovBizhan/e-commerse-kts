export type ICategory = {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
};

export type IData = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: ICategory;
  creationAt: string;
  updatedAt: string;
};

export type TFilters = {
  price_min: number | null,
  price_max: number | null
}
