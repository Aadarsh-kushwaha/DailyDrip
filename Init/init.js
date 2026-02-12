console.log("Seeding started...");

const coffees = [
  {
    name: "Espresso Shot",
    description: "Strong and bold single shot of espresso with rich crema.",
    price: 120,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    avgRating: 4.6
  },
  {
    name: "Cappuccino Classic",
    description: "Smooth espresso blended with steamed milk and a thick milk foam layer.",
    price: 180,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
    avgRating: 4.8
  },
  {
    name: "Cold Brew Coffee",
    description: "Chilled, slow-brewed coffee with a natural sweetness and less acidity.",
    price: 200,
    image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78",
    avgRating: 4.5
  },
  {
  name: "Hazelnut Latte",
  description: "Creamy latte infused with nutty hazelnut flavor, topped with foam.",
  price: 220,
  image: "https://images.unsplash.com/photo-1587986046978-7b07e8c43c3e?auto=format&fit=crop&w=800&q=80",
  avgRating: 4.7
},
{
  name: "Caramel Macchiato",
  description: "Layered espresso drink with milk, vanilla syrup, and caramel drizzle.",
  price: 240,
  image: "https://images.unsplash.com/photo-1558874785-1b4e09e2c8ad?auto=format&fit=crop&w=800&q=80",
  avgRating: 4.7
}
,
  {
    name: "Mocha Delight",
    description: "A rich blend of espresso, and steamed milk topped with whipped cream.",
    price: 230,
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096",
    avgRating: 4.8
  },
  {
    name: "Iced Americano",
    description: "Refreshing espresso-based drink with chilled water and ice cubes.",
    price: 160,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772",
    avgRating: 4.3
  },
  {
    name: "Vanilla Cold Coffee",
    description: "Smooth cold coffee with a hint of vanilla, perfect for summer.",
    price: 190,
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    avgRating: 4.6
  }
];

const drinkData = [

  {
    name: "Orange Juice",
    description: "Refreshing orange juice packed with vitamin C.",
    price: 110,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D",
    avgRating: 4.4
  },
  {
    name: "Virgin Mojito",
    description: "Minty lime mocktail served chilled with soda.",
    price: 180,
    image: "https://www.joyfulhealthyeats.com/wp-content/uploads/2025/06/Virgin-Mojito-Nojito-Recipe-web-6.jpg",
    avgRating: 4.6
  },
  {
    name: "Chocolate Shake",
    description: "Thick chocolate milkshake topped with whipped cream.",
    price: 160,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767",
    avgRating: 4.5
  },
  {
    name: "Strawberry Shake",
    description: "Creamy strawberry shake made with fresh strawberries.",
    price: 170,
    image: "https://www.amulcafe.in/wp-content/uploads/2024/03/Strawberry-Milkshake.webp",
    avgRating: 4.6
  }
];

console.log("Seeding completedd...");


  module.exports = { data: coffees };
  
  module.exports = { data: drinkData };