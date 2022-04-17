import * as Types from "./types/types";

export const SiteData: Types.Site = {
  sectionTitles: {
    about: "About Us",
    reviews: "Reviews",
    contact: "Contact Us",
    location: "Location",
    hours: "Hours",
    gallery: "Gallery",
  },
  logoPath: "./public/images/",
  heroImagePath: "./public/images/",
  about: "ideal auto is a good auto repair shop",
  reviews: [
    {
      rating: "4.5",
      date: "12/2/22",
      body: "great mechanic",
      name: "Andrew Garfield",
    },
    {
      rating: "4.5",
      date: "12/2/22",
      body: "great mechanic",
      name: "Andrew Garfield",
    },
    {
      rating: "4.5",
      date: "12/2/22",
      body: "great mechanic",
      name: "Andrew Garfield",
    },
  ],
  contact: {
    number: "(123) 123-1234",
    email: "idealauto@gmail.com",
  },
  address: {
    street: "123 w st road",
    city: "Seattle, WA",
    zipcode: "98117",
  },
  hours: {
    MonFri: "8:30am - 5:00pm",
    Sat: "10:00am - 2:00pm",
    Sun: "Closed",
  },
  Gallery: [
    {
      make: "Tesla",
      model: "Model 3",
      year: "2020",
      miles: "5",
      price: "47998",
    },
    {
      make: "Tesla",
      model: "Model 3",
      year: "2020",
      miles: "5",
      price: "47998",
    },
    {
      make: "Tesla",
      model: "Model 3",
      year: "2020",
      miles: "5",
      price: "47998",
    },
  ],
};
