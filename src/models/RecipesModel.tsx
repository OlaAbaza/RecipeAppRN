interface RecipeModel {
    recipes: Recipe[] | null;
  }
  
  interface Recipe {
    aggregateLikes: number | null;
    analyzedInstructions: AnalyzedInstruction[] | null;
    cheap: boolean | null;
    cookingMinutes: number | null;
    creditsText: string | null;
    cuisines: string[] | null;
    dairyFree: boolean | null;
    diets: string[] | null;
    dishTypes: string[] | null;
    extendedIngredients: ExtendedIngredient[] | null;
    gaps: string | null;
    glutenFree: boolean | null;
    healthScore: number | null;
    id: number | null;
    image: string | null;
    imageType: string | null;
    instructions: string | null;
    license: string | null;
    lowFodmap: boolean | null;
    occasions: string[] | null;
    originalId: any;
    preparationMinutes: number | null;
    pricePerServing: number | null;
    readyInMinutes: number | null;
    servings: number | null;
    sourceName: string | null;
    sourceUrl: string | null;
    spoonacularSourceUrl: string | null;
    summary: string | null;
    sustainable: boolean | null;
    title: string | null;
    vegan: boolean | null;
    vegetarian: boolean | null;
    veryHealthy: boolean | null;
    veryPopular: boolean | null;
    weightWatcherSmartPoints: number | null;
  }
  
  interface Step {
    equipment: Equipment[] | null;
    ingredients: Ingredient[] | null;
    length: Length | null;
    number: number | null;
    step: string | null;
  }
  
  interface Temperature {
    number: number | null;
    unit: string | null;
  }
  
  interface Us {
    amount: number | null;
    unitLong: string | null;
    unitShort: string | null;
  }
  
  interface Metric {
    amount: number | null;
    unitLong: string | null;
    unitShort: string | null;
  }
  
  interface Measures {
    metric: Metric | null;
    us: Us | null;
  }
  
  interface Length {
    number: number | null;
    unit: string | null;
  }
  
  interface Ingredient {
    id: number | null;
    image: string | null;
    localizedName: string | null;
    name: string | null;
  }
  
  interface ExtendedIngredient {
    aisle: string | null;
    amount: number | null;
    consistency: string | null;
    id: number | null;
    image: string | null;
    measures: Measures | null;
    meta: string[] | null;
    name: string | null;
    nameClean: string | null;
    original: string | null;
    originalName: string | null;
    unit: string | null;
  }
  
  interface Equipment {
    id: number | null;
    image: string | null;
    localizedName: string | null;
    name: string | null;
    temperature: Temperature | null;
  }
  
  interface AnalyzedInstruction {
    name: string | null;
    steps: Step[] | null;
  }
  