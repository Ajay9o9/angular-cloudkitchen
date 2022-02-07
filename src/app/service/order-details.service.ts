import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id: 1,
      foodName: "Peanut Slaw with Soba Noodles",
      foodPrice: 219,
      foodDetails : "Easily gluten free and easily vegan. This ice cream may look like plain chocolate, but it's not—it's a super concentrated version of cookies 'n' cream. Its rich flavor and color come from crushed Oreo wafers (which you can feel free to buy or make from scratch), with a handful of crushed sandwich cookies folded in at the end.",
      foodImg: "https://cookieandkate.com/images/2014/01/peanut-soba-noodles-slaw-768x1151.jpg"
    },
    {
      id: 2,
      foodName: "Roasted Cauliflower and Lentil Tacos",
      foodPrice: 219,
      foodDetails: "Although chocolate ice cream contains a heavy dose of sugar, the dessert does offer some health benefits. Chocolate provides natural chemicals that can help protect you from cardiovascular disease and stroke, and the calcium in ice cream can work to build strong bones.",
      foodImg: "https://cookieandkate.com/images/2018/08/roasted-cauliflower-lentil-tacos-3-768x1056.jpg"
    },
    {
      id: 3,
      foodName: "Paneer Masala",
      foodDetails : "Paneer, also known as ponir or Indian cottage cheese, is a fresh acid-set cheese common in the Indian subcontinent made from cow or buffalo milk. It is a non-aged, non-melting soft cheese made by curdling milk with a fruit- or vegetable-derived acid, such as lemon juice.",
      foodPrice: 219,
      foodImg: "https://thecurrymommy.com/wp-content/uploads/2021/09/butter-paneer-masala-one-pot.jpg"
    },
    {
      id: 4,
      foodName: "Spicy Sweet Potato & Green Rice Burrito Bowls",
      foodPrice: 219,
      foodDetails: "Although chocolate ice cream contains a heavy dose of sugar, the dessert does offer some health benefits. Chocolate provides natural chemicals that can help protect you from cardiovascular disease and stroke, and the calcium in ice cream can work to build strong bones.",
      foodImg: "https://cookieandkate.com/images/2015/01/sweet-potato-green-rice-burrito-bowls-1-550x757.jpg"
    },
   
    {
      id: 5,
      foodName: "French Fries",
      foodDetails : "French fries, chips, finger chips, French-fried potatoes, or simply fries, are batonnet or allumette-cut deep-fried potatoes, originating from either Belgium or France. They are prepared by cutting the potato into even strips, ",
      foodPrice: 219,
      foodImg: "https://aubreyskitchen.com/wp-content/uploads/2021/01/frozen-french-fries-in-air-fryer.jpg"
    },
    {
      id: 6,
      foodName: "Pizza",
      foodPrice: 219,
      foodDetails: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta. ",
      foodImg: "https://c.ndtvimg.com/2021-02/bj6olj1o_pizza_625x300_20_February_21.jpg?im=FeatureCrop,algorithm=cascade,width=1200,height=675"
    },
    {
      id: 7,
      foodName: "Mushroom Soup",
      foodDetails : "Cream of mushroom soup is a simple type of soup where a basic roux is thinned with cream or milk and then mushrooms and/or mushroom broth are added. It is well known in North America as a common type of condensed canned soup.",
      foodPrice: 219,
      foodImg: "https://www.recipetineats.com/wp-content/uploads/2021/04/Mushroom-Soup-in-bowl-SQ.jpg"
    },
    {
      id: 8,
      foodName: "Chocolate Icecream",
      foodPrice: 219,
      foodDetails: "Although chocolate ice cream contains a heavy dose of sugar, the dessert does offer some health benefits. Chocolate provides natural chemicals that can help protect you from cardiovascular disease and stroke, and the calcium in ice cream can work to build strong bones.",
      foodImg: "https://lmld.org/wp-content/uploads/2012/07/Chocolate-Ice-Cream-3-500x500.jpg"
    },
    {
      id: 9,
      foodName: "Lentil Soup",
      foodPrice: 219,
      foodDetails: "Although chocolate ice cream contains a heavy dose of sugar, the dessert does offer some health benefits. Chocolate provides natural chemicals that can help protect you from cardiovascular disease and stroke, and the calcium in ice cream can work to build strong bones.",
      foodImg: "https://eatsomethingvegan.com/wp-content/uploads/2021/01/lentil-soup-sq-1.jpg"
    },
    {
      id: 10,
      foodName: "Veg Fried Rice",
      foodPrice: 219,
      foodDetails: "Although chocolate ice cream contains a heavy dose of sugar, the dessert does offer some health benefits. Chocolate provides natural chemicals that can help protect you from cardiovascular disease and stroke, and the calcium in ice cream can work to build strong bones.",
      foodImg: "https://www.ticklingpalates.com/wp-content/uploads/2020/05/fried-rice-using-veggies-500x375.jpg"
    },
    {
      id: 11,
      foodName: "Spicy Sweet Potato & Green Rice Burrito Bowls",
      foodPrice: 219,
      foodDetails: "Although chocolate ice cream contains a heavy dose of sugar, the dessert does offer some health benefits. Chocolate provides natural chemicals that can help protect you from cardiovascular disease and stroke, and the calcium in ice cream can work to build strong bones.",
      foodImg: "https://cookieandkate.com/images/2015/01/sweet-potato-green-rice-burrito-bowls-1-550x757.jpg"
    },
    {
      id: 12,
      foodName: "Huevos Rancheros",
      foodPrice: 219,
      foodDetails: "Although chocolate ice cream contains a heavy dose of sugar, the dessert does offer some health benefits. Chocolate provides natural chemicals that can help protect you from cardiovascular disease and stroke, and the calcium in ice cream can work to build strong bones.",
      foodImg: "https://cookieandkate.com/images/2017/05/best-huevos-rancheros-recipe-2-550x757.jpg"
    },
    {
      id: 13,
      foodName: "Vegetarian Tacos",
      foodPrice: 219,
      foodDetails: "Although chocolate ice cream contains a heavy dose of sugar, the dessert does offer some health benefits. Chocolate provides natural chemicals that can help protect you from cardiovascular disease and stroke, and the calcium in ice cream can work to build strong bones.",
      foodImg: "https://cookieandkate.com/images/2018/04/vegetarian-bean-tacos-recipe-3-768x1151.jpg"
    },
    {
      id: 14,
      foodName: "Mushroom Soup",
      foodDetails : "Cream of mushroom soup is a simple type of soup where a basic roux is thinned with cream or milk and then mushrooms and/or mushroom broth are added. It is well known in North America as a common type of condensed canned soup.",
      foodPrice: 219,
      foodImg: "https://www.recipetineats.com/wp-content/uploads/2021/04/Mushroom-Soup-in-bowl-SQ.jpg"
    },
    {
      id: 15,
      foodName: "Chocolate Icecream",
      foodPrice: 219,
      foodDetails: "Although chocolate ice cream contains a heavy dose of sugar, the dessert does offer some health benefits. Chocolate provides natural chemicals that can help protect you from cardiovascular disease and stroke, and the calcium in ice cream can work to build strong bones.",
      foodImg: "https://lmld.org/wp-content/uploads/2012/07/Chocolate-Ice-Cream-3-500x500.jpg"
    },
    {
      id: 16,
      foodName: "Lentil Soup",
      foodPrice: 219,
      foodDetails: "Although chocolate ice cream contains a heavy dose of sugar, the dessert does offer some health benefits. Chocolate provides natural chemicals that can help protect you from cardiovascular disease and stroke, and the calcium in ice cream can work to build strong bones.",
      foodImg: "https://eatsomethingvegan.com/wp-content/uploads/2021/01/lentil-soup-sq-1.jpg"
    },
    {
      id: 17,
      foodName: "Veg Fried Rice",
      foodPrice: 219,
      foodDetails: "Although chocolate ice cream contains a heavy dose of sugar, the dessert does offer some health benefits. Chocolate provides natural chemicals that can help protect you from cardiovascular disease and stroke, and the calcium in ice cream can work to build strong bones.",
      foodImg: "https://www.ticklingpalates.com/wp-content/uploads/2020/05/fried-rice-using-veggies-500x375.jpg"
    },
    {
      id: 18,
      foodName: "Paneer Masala",
      foodDetails : "Paneer, also known as ponir or Indian cottage cheese, is a fresh acid-set cheese common in the Indian subcontinent made from cow or buffalo milk. It is a non-aged, non-melting soft cheese made by curdling milk with a fruit- or vegetable-derived acid, such as lemon juice.",
      foodPrice: 219,
      foodImg: "https://thecurrymommy.com/wp-content/uploads/2021/09/butter-paneer-masala-one-pot.jpg"
    },
  ]




}
