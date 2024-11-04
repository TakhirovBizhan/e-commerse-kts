interface ICategory {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

export interface IData {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: ICategory;
  creationAt: string;
  updatedAt: string;
}
