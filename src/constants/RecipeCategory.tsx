export enum RecipeCategory {
  BEVERAGE = "beverage",
  SNACK = "snack",
  SOUP = "soup",
  DESSERT = "dessert",
  SAUCE = "sauce",
  SALAD = "salad",
  APPETIZER = "appetizer",
  BREAKFAST = "breakfast",
  MAIN_COURSE = "main course",
  BREAD = "bread",
}

// Function to get all RecipeCategories
export function getAllRecipeCategories(): RecipeCategory[] {
  return Object.values(RecipeCategory);
}
