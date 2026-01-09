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
    description: "A rich blend of espresso, chocolate, and steamed milk topped with whipped cream.",
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
    image: "data:image/jpeg;base64,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",
    avgRating: 4.6
  }
];

console.log("Seeding completedd...");


  module.exports = { data: coffees };
  
  module.exports = { data: drinkData };