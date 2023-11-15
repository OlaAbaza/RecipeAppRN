import { RecipeCategory } from "../constants/RecipeCategory";

export interface Recipe {
  id: string;
  title: string;
  imageSource: any;
  preparationTime: number;
  summary: string;
  category: RecipeCategory;
  ingredients: string[];
}

export const recipeData: Recipe[] = [
  {
    id: "1",
    title: "Grilled Potato",
    imageSource: require("../../assets/food.jpg"),
    preparationTime: 76,
    category: RecipeCategory.APPETIZER,
    summary:
      "Chocolate cake is made with chocolate. It can also include other ingredients.[1] These include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to the 17th century, when cocoa powder from the Americas was added to traditional cake recipes",
    ingredients: ["flour", "eggs", "fat", "sugar", "salt"],
  },
  {
    id: "2",
    title: "Pasta with Tomato Sauce",
    imageSource: require("../../assets/food.jpg"),
    preparationTime: 45,
    category: RecipeCategory.APPETIZER,
    summary:
      "Chocolate cake is made with chocolate. It can also include other ingredients.[1] These include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to the 17th century, when cocoa powder from the Americas was added to traditional cake recipes",
    ingredients: ["flour", "eggs", "fat", "sugar", "salt"],
  },
  {
    id: "3",
    title: "Chocolate Cake",
    imageSource: require("../../assets/food.jpg"),
    preparationTime: 60,
    category: RecipeCategory.BEVERAGE,
    summary:
      "Chocolate cake is made with chocolate. It can also include other ingredients.[1] These include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to the 17th century, when cocoa powder from the Americas was added to traditional cake recipes",
    ingredients: ["flour", "eggs", "fat", "sugar", "salt"],
  },
  {
    id: "4",
    title: "Chocolate Cake",
    imageSource: require("../../assets/food.jpg"),
    preparationTime: 60,
    category: RecipeCategory.BEVERAGE,
    summary:
      "Chocolate cake is made with chocolate. It can also include other ingredients.[1] These include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to the 17th century, when cocoa powder from the Americas was added to traditional cake recipes",
    ingredients: ["flour", "eggs", "fat", "sugar", "salt"],
  },
  {
    id: "5",
    title: "Chocolate Cake",
    imageSource: require("../../assets/food.jpg"),
    preparationTime: 60,
    category: RecipeCategory.BREAKFAST,
    summary:
      "Chocolate cake is made with chocolate. It can also include other ingredients.[1] These include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to the 17th century, when cocoa powder from the Americas was added to traditional cake recipes",
    ingredients: ["flour", "eggs", "fat", "sugar", "salt"],
  },
  {
    id: "6",
    title: "Chocolate Cake",
    imageSource: require("../../assets/food.jpg"),
    preparationTime: 60,
    category: RecipeCategory.BREAKFAST,
    summary:
      "Chocolate cake is made with chocolate. It can also include other ingredients.[1] These include fudge, vanilla creme, and other sweeteners. The history of chocolate cake goes back to the 17th century, when cocoa powder from the Americas was added to traditional cake recipes",
    ingredients: ["flour", "eggs", "fat", "sugar", "salt"],
  },
];
