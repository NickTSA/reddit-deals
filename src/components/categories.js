import buildapcsales from "../images/category/m/buildapcsales.jpg";
import frugalfemalefashion from "../images/category/m/frugalfemalefashion.jpg";
import frugalmalefashion from "../images/category/m/frugalmalefashion.jpg";
import gamesale from "../images/category/m/gamesale.jpg";
import greatxboxdeals from "../images/category/m/greatxboxdeals.jpg";
import homedecordeals from "../images/category/m/homedecordeals.jpg";
import onlinegrocerydeals from "../images/category/m/onlinegrocerydeals.jpg";
import ps4deals from "../images/category/m/ps4deals.jpg";
import sneakerdeals from "../images/category/m/sneakerdeals.jpg";
import steamdeals from "../images/category/m/steamdeals.jpg";
import travel_deals from "../images/category/m/travel_deals.jpg";
import vinyldeals from "../images/category/m/vinyldeals.jpg";

export const categories = [
  { image: buildapcsales, name: "buildapcsales", excluded_flair: [] },
  { image: gamesale, name: "GameSale", excluded_flair: [] },
  { image: vinyldeals, name: "VinylDeals", excluded_flair: ["EXPIRED"] },
  { image: ps4deals, name: "PS4Deals", excluded_flair: [] },
  { image: greatxboxdeals, name: "GreatXboxDeals", excluded_flair: [] },
  { image: sneakerdeals, name: "SneakerDeals", excluded_flair: [] },
  {
    image: frugalfemalefashion,
    name: "FrugalFemaleFashion",
    excluded_flair: [
      "Announcement",
      "Discussion",
      "Item Review",
      "SALE EXPIRED"
    ]
  },
  { image: travel_deals, name: "travel_deals", excluded_flair: [] },
  { image: onlinegrocerydeals, name: "OnlineGroceryDeals", excluded_flair: [] },
  { image: homedecordeals, name: "homedecordeals", excluded_flair: [] },
  {
    image: frugalmalefashion,
    name: "frugalmalefashion",
    excluded_flair: ["[Discussion]", "[Review]"]
  },
  { image: steamdeals, name: "steamdeals", excluded_flair: [] }
];
