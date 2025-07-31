import americano from '../assets/coffee/americano-removebg-preview.png'
import latte from '../assets/coffee/latte-removebg-preview.png'
import cappuchino from '../assets/coffee/cappuchino-removebg-preview.png'
import coldbrew from '../assets/coffee/coldbrew-removebg-preview.png' 
import flatwhite from '../assets/coffee/flatwhite-removebg-preview.png' 
import mocha from '../assets/coffee/mocha-removebg-preview.png'
import espresso from '../assets/coffee/espresso-removebg-preview.png' 
import icedamericano from '../assets/coffee/icedamericano-removebg-preview.png'
import icedlatte from '../assets/coffee/icedlatte-removebg-preview.png'
import berryfizz from '../assets/tea/berryfizz-removebg-preview.png'
import blacktea from '../assets/tea/blacktea-removebg-preview.png'
import chailatte from '../assets/tea/chailatte-removebg-preview.png'
import greentea from '../assets/tea/greentea-removebg-preview.png'
import hibiscustea from '../assets/tea/icedhibiscustea-removebg-preview.png'
import jasminetea from '../assets/tea/jasminetea-removebg-preview.png'
import kiwicooler from '../assets/tea/kiwicooler-removebg-preview.png'
import lemontea from '../assets/tea/lemontea__2_-removebg-preview.png'
import matcha from '../assets/tea/matcha-removebg-preview.png'
import peachicedtea from '../assets/tea/peachicedtea-removebg-preview.png'
import strawberrysparklingtea from '../assets/tea/strawberrysparklingtea-removebg-preview.png'
import minttea from '../assets/tea/minttea-removebg-preview.png'
import chawri from '../assets/drinks/chawri-removebg-preview.png'
import midorisakesour from '../assets/drinks/midorisake-removebg-preview.png'
import pineappu from '../assets/drinks/pineappub-removebg-preview.png'
import sakuramartini from '../assets/drinks/sakuramartini-removebg-preview.png'
import ume from '../assets/drinks/umee-removebg-preview.png'
import yuzu from '../assets/drinks/yuzubee-removebg-preview.png'
import blackberrytoast from '../assets/snacks/blackberrytoast-removebg-preview.png'
import brunchtoasts from '../assets/snacks/brunchtoasts-removebg-preview.png'
import fruitbowl from '../assets/snacks/fruit_bowl-removebg-preview.png'
import icecream from '../assets/snacks/icecream-removebg-preview.png'
import icecreamwberry from '../assets/snacks/icecreamwberry-removebg-preview.png'
import peachbowl from '../assets/snacks/peachbowl-removebg-preview.png'
import pudding from '../assets/snacks/pudding-removebg-preview.png'
import strawberrymousse from '../assets/snacks/strawberrymousse-removebg-preview.png'
import peachyogurt from '../assets/snacks/peachyogurt-removebg-preview.png'
import fooda1 from '../assets/food/food_asina1-removebg-preview.png'
import fooda2 from '../assets/food/food_asian2-removebg-preview.png'
import fooda3 from '../assets/food/food_asian3-removebg-preview.png'
import fooda4 from '../assets/food/food_asian4-removebg-preview.png'
import fooda5 from '../assets/food/food_asian5-removebg-preview.png'
import fooda6 from '../assets/food/food_asian6-removebg-preview.png'
import kong from '../assets/food/food_kong-removebg-preview.png'
import bao from '../assets/food/food_bao-removebg-preview.png'



export type ProductProps={
    name:string,
    type:'coffee'|'tea'|'snack'|'alcohol'|'food',
    price:number,
    description: string,
    image:string
}

//separate array for each type on product, also i will add foods
// coffee tea drinks snacks foods

export const coffeeProducts: ProductProps[] = [
  {
    name: "Americano",
    type: "coffee",
    price: 850,
    description: "Espresso diluted with hot water for a smooth, bold taste.",
    image: americano
  },
  {
    name: "Latte",
    type: "coffee",
    price: 950,
    description: "Creamy milk blended with espresso and topped with foam.",
    image: latte
  },
  {
    name: "Cappuccino",
    type: "coffee",
    price: 950,
    description: "Equal parts espresso, steamed milk, and rich foam.",
    image: cappuchino
  },
  {
    name: "Flat White",
    type: "coffee",
    price: 1000,
    description: "A velvety blend of espresso and micro-foamed milk.",
    image: flatwhite
  },
  {
    name: "Mocha",
    type: "coffee",
    price: 1050,
    description: "Espresso mixed with chocolate syrup and steamed milk.",
    image: mocha
  },
  {
    name: "Espresso",
    type: "coffee",
    price: 700,
    description: "A strong, rich shot of pure espresso.",
    image: espresso
  },
  {
    name: "Cold Brew",
    type: "coffee",
    price: 1100,
    description: "Slow-brewed coffee served chilled over ice.",
    image: coldbrew
  },
  {
    name: "Iced Americano",
    type: "coffee",
    price: 900,
    description: "Chilled Americano with a bold, refreshing taste.",
    image: icedamericano
  },
  {
    name: "Iced Latte",
    type: "coffee",
    price: 1000,
    description: "Espresso with cold milk and ice.",
    image: icedlatte
  }
]

export const teaProducts: ProductProps[] = [
  {
    name: "Green Tea",
    type: "tea",
    price: 700,
    description: "Light, refreshing, and full of antioxidants.",
    image: greentea
  },
  {
    name: "Black Tea",
    type: "tea",
    price: 750,
    description: "Bold and rich, a classic tea for any time of day.",
    image: blacktea
  },
  {
    name: "Chai Latte",
    type: "tea",
    price: 950,
    description: "A spiced milk tea blend with cinnamon, cardamom, and clove.",
    image: chailatte
  },
  {
    name: "Mint Tea",
    type: "tea",
    price: 700,
    description: "A soothing herbal infusion with fresh mint leaves.",
    image: minttea
  },
  {
    name: "Lemon Tea",
    type: "tea",
    price: 800,
    description: "Zesty lemon blended for a warm, healing brew.",
    image: lemontea
  },
  {
    name: "Matcha",
    type: "tea",
    price: 1000,
    description: "Stone-ground green tea powder whisked into a rich, energizing drink.",
    image: matcha
  },
  {
    name: "Iced Hibiscus Tea",
    type: "tea",
    price: 850,
    description: "Tangy, floral, and served chilled — a vibrant summer favorite.",
    image: hibiscustea
  },
  {
    name: "Peach Iced Tea",
    type: "tea",
    price: 900,
    description: "Cool black tea blended with natural peach flavor and ice.",
    image: peachicedtea
  },
  {
    name: "Jasmine Tea",
    type: "tea",
    price: 900,
    description: "Delicate green tea scented with jasmine flowers.",
    image: jasminetea
  },
  {
    name: "Strawberry Sparking Tea",
    type: "tea",
    price: 950,
    description: "A refreshing blend of strawberry and sparkling tea.",
    image: strawberrysparklingtea
  },
  {
    name: "Kiwi Cooler",
    type: "tea",
    price: 900,
    description: "A refreshing blend of kiwi and green tea.",
    image: kiwicooler
  },
  {
    name: "Berry Fizz",
    type: "tea",
    price: 900,
    description: "A fruity blend of berries with a fizzy twist.",
    image: berryfizz
  }
]

export const drinksProducts: ProductProps[] =[
    {
      name: "Midori Sake Sour",
      type: "alcohol",
      price: 1500,
      description: "A refreshing cocktail with Midori melon liqueur, sake, and a hint of citrus.",
      image: midorisakesour
    },
    {
      name: "Ume Old Fashion",
      type: "alcohol",
      price: 1600,  
      description: "A twist on the classic Old Fashioned with umeshu (plum wine) and whiskey.",
      image: ume
    },
    {
      name: "Chawri",
      type: "alcohol",
      price: 1700,
      description: "A unique cocktail blending traditional flavors with modern mixology.",
      image: chawri
    },
    {
      name: "Yuzu Bee Knees",
      type: "alcohol",
      price: 1800,
      description: "A refreshing cocktail with yuzu juice, gin, and a hint of honey.",
      image: yuzu
    },
    {
      name:"Pineappu Beach",
      type: "alcohol",
      price: 1900,
      description: "A tropical cocktail with pineapple juice, coconut cream, and rum.",
      image: pineappu
    },
    {
      name: "Sakura Martini",
      type: "alcohol",
      price: 2000,
      description: "A floral cocktail with sake, cherry blossom syrup, and a hint of citrus.",
      image: sakuramartini
    }
]

export const snackProducts : ProductProps[] = [
  {
    name: "Fruit Salad",
    type: "snack",
    price: 800,
    description: "A refreshing mix of seasonal fruits.",
    image: fruitbowl
  },
  {
    name: "Ice Cream with Berries",
    type: "snack",
    price: 900,
    description: "Creamy ice cream topped with a medley of fresh berries.",
    image: icecreamwberry
  },
  {
    name: "Peach Bowl",
    type: "snack",
    price: 850,
    description: "A delightful bowl of fresh peaches with a hint of mint.",
    image: peachbowl
  },
  {
    name: "Strawberry Mousse",
    type: "snack",
    price: 950,
    description: "A light and airy mousse made with fresh strawberries.",
    image: strawberrymousse
  },
  {
    name: "Strawberry Ice Cream",
    type: "snack",
    price: 600,
    description: "Creamy strawberry ice cream made with fresh strawberries.",
    image: icecream
  },
  {
    name: "Pudding",
    type: "snack",
    price: 700,
    description: "Creamy vanilla pudding with a hint of caramel.",
    image: pudding
  },
  {
    name: "Brunch Toasts",
    type: "snack",
    price: 1400,
    description: "Toasted bread with a cream cheese and variety of toppings.",
    image: brunchtoasts
  },
  {
    name: "Peach Yogurt Bomb",
    type: "snack",
    price: 900,
    description: "A creamy yogurt parfait layered with fresh peaches.",
    image: peachyogurt
  },
  {
    name : "Blackberry Toast",
    type: "snack",
    price: 1000,
    description: "Toasted bread topped with cream cheese and fresh blackberries.",
    image: blackberrytoast
  }
]

export const foodProducts: ProductProps[] = [
  {
    name : "Kongguksu",
    type: "food",
    price: 1800,
    description: "Cold noodle soup made with soy milk and topped with cucumber.",
    image: kong
  },
  {
  name: "Asian-style Bao Burger",
  type: "food",
  price: 2800,
  description: "Steamed bao bun filled with crispy fried cutlet, shredded cabbage, creamy mayo-based sauce, and topped with green onions.",
  image: bao
   },

  {
    name: "Asian-style light lunch 1",
    type: "food",
    price: 3000,  
    description: "Vietnamese Pho(light rice noodle soup) with dumplings and soft boiled egg.",
    image: fooda1
  },
  {
    name: "Asian-style light lunch 2",
    type: "food",
    price: 3000,
    description: "Steamed buns and shumai with a side of hot and sour vegetable soup served in a wooden bowl.",
    image: fooda2
  },
  {
    name: "Asian-style light lunch 3",
    type: "food",
    price: 3200,
    description: "Cold noodles with spicy minced meat, peanuts, half boiled egg, and a side of shumai, dumplings, and prawn crackers.",
    image: fooda3
  },
  {
    name: "Asian-style light lunch 4",
    type: "food",
    price: 3100,
    description: "Spicy wontons served over julienned cucumber with sesame seeds, paired with a bowl of clear noodle soup.",
    image: fooda4
  },
  {
    name: "Asian-style light lunch 5",
    type: "food",
    price: 2900,
    description: "Vietnamese-style fresh spring rolls with colorful wrappers, served alongside a bowl of spicy wonton soup.",
    image: fooda5
  },
  {
    name: "Asian-style light lunch 6",
    type: "food",
    price: 3100,
    description: "Shrimp and tofu soup with vegetables, served with a variety of steamed dumplings topped with sesame seeds.",
    image: fooda6
  }

]