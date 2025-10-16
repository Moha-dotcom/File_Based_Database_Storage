import Product from "./modal/product.js";
import ProductDatabase from "./data/database.js";



const db = new ProductDatabase();

let newProducts = [
  new Product("Classic Buffalo Wings", 12.99, "Crispy wings tossed in our signature buffalo sauce.", 120),
  new Product("Garlic Parmesan Wings", 13.49, "Savory wings coated with buttery garlic parmesan sauce.", 90),
  new Product("Honey BBQ Wings", 12.79, "Sweet and smoky BBQ wings glazed to perfection.", 110),
  new Product("Blazin’ Hot Wings", 13.99, "Extreme heat lovers’ favorite—spicy and bold.", 70),
  new Product("Lemon Pepper Wings", 12.49, "Tangy lemon zest mixed with cracked black pepper.", 95),
  new Product("Teriyaki Wings", 12.99, "Sweet Asian-style sauce with a hint of ginger and soy.", 85),
  new Product("Mango Habanero Wings", 13.59, "Sweet tropical mango with a fiery habanero kick.", 80),
  new Product("Cajun Rub Wings", 12.89, "Dry-rubbed wings packed with Southern Cajun spice.", 100),
  new Product("Smoky Chipotle Wings", 13.29, "Rich, smoky chipotle peppers for a bold flavor.", 75),
  new Product("Sweet Chili Wings", 12.69, "Perfect balance of sweet and spicy chili glaze.", 90)
];





// console.log(await db.findProductById("13f465cd-5eab-4d76-980f-e3a12639ac6d"));

console.log(await db.getAllProducts());