interface Flavoring<FlavorT> {
  _type?: FlavorT;
}
type Flavor<T, FlavorT> = T & Flavoring<FlavorT>;

export enum KeyCode {
  Escape = 27,
}

export interface Rating {
  total: number;
  average: number;
}

export type Point = {
  latitude: number;
  longitude: number;
};

export interface Product {
  name: string;
  image: string;
  price: number;
}

export interface Catalog {
  name: string;
  products: Product[];
}

export type RestaurantId = Flavor<string, 'RestaurantId'>;

export interface Restaurant {
  id: RestaurantId;
  name: string;
  image: string;
  logo: string;
  ratings: Rating;
  coordinates: Point;
  catalog?: Catalog;
  category: string;
  distance: number;
  formattedDistance: string;
}
