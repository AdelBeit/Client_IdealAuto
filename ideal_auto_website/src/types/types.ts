export type Review = {
  rating: string;
  date: string;
  body: string;
  name: string;
  image?: string;
};

export type Car = {
  make: string;
  model: string;
  year: string;
  miles: string;
  price: string;
  image?: string;
};

export interface Site {
  sectionTitles: Record<string, string>;
  logoPath: string;
  heroImagePath: string;
  about: string;
  reviews: Review[];
  contact: Record<string, string>;
  address: Record<string, string>;
  hours: Record<string, string>;
  Gallery: Car[];
}
