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
  imagePaths: {
    logo: "./images/img.jpg",
    hero: "./images/img.jpg",
    menuButton: "./images/menu_button.svg",
    starIcon__empty: "./images/star__empty.svg",
    starIcon__filled: "./images/star__filled.svg",
  },
  about: "ideal auto is a good auto repair shop",
  reviews: [
    {
      rating: "2",
      date: "12/2/20",
      body: "great mechanic",
      name: "Andrew Garfield",
      url: "google.com",
    },
    {
      rating: "5",
      date: "12/2/22",
      body: "great mechanicgreat mechanicgreat mechanicgreat mechanicgreat mechanic",
      name: "Andrew Garfield",
      url: "google.com",
    },
    {
      rating: "0",
      date: "12/2/22",
      body: "great mechanic",
      name: "jason mamoa",
      url: "google.com",
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
  hours: ["Mon - Fri: 8:30am - 5:00pm", "Sat: 10:00am - 2:00pm", "Sun: Closed"],
  cars: [
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
