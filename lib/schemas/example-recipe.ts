import { Recipe, validateRecipe } from "./recipe";

export const exampleRecipe: Recipe = {
  name: "Tropical Paradise Punch",
  description:
    "A vibrant tropical cocktail with rum, passion fruit, and coconut that transports you to a Caribbean beach",
  type: "cocktail",
  difficulty: "medium",
  prepTime: "5 minutes",
  servings: 1,

  glass: "hurricane",
  ice: "crushed",

  flavorProfile: ["tropical", "fruity", "sweet"],

  ingredients: [
    {
      name: "White rum",
      amount: 2,
      unit: "oz",
      type: "spirit",
      optional: false,
    },
    {
      name: "Coconut rum",
      amount: 1,
      unit: "oz",
      type: "spirit",
      optional: false,
    },
    {
      name: "Passion fruit syrup",
      amount: 0.75,
      unit: "oz",
      type: "syrup",
      optional: false,
    },
    {
      name: "Fresh lime juice",
      amount: 0.5,
      unit: "oz",
      type: "juice",
      optional: false,
    },
    {
      name: "Pineapple juice",
      amount: 3,
      unit: "oz",
      type: "juice",
      optional: false,
    },
    {
      name: "Coconut cream",
      amount: 0.5,
      unit: "oz",
      type: "mixer",
      optional: false,
    },
    {
      name: "Angostura bitters",
      amount: 2,
      unit: "dash",
      type: "bitters",
      optional: true,
    },
    {
      name: "Pineapple wedge",
      unit: "piece",
      type: "garnish",
      optional: false,
    },
    {
      name: "Maraschino cherry",
      unit: "piece",
      type: "garnish",
      optional: false,
    },
    {
      name: "Fresh mint sprig",
      unit: "sprig",
      type: "garnish",
      optional: false,
    },
  ],

  instructions: [
    {
      step: 1,
      description:
        "Add white rum, coconut rum, passion fruit syrup, and lime juice to shaker",
      technique: "build",
      equipment: ["shaker"],
    },
    {
      step: 2,
      description: "Add pineapple juice and coconut cream to shaker",
      technique: "build",
      equipment: ["shaker"],
    },
    {
      step: 3,
      description: "Fill shaker with ice and shake vigorously for 15 seconds",
      technique: "shake",
      equipment: ["shaker"],
      duration: "15 seconds",
    },
    {
      step: 4,
      description: "Fill hurricane glass with crushed ice",
      technique: "build",
      equipment: [],
    },
    {
      step: 5,
      description: "Double strain mixture into glass",
      technique: "double_strain",
      equipment: ["strainer", "fine_strainer"],
    },
    {
      step: 6,
      description: "Add 2 dashes of Angostura bitters on top if desired",
      technique: "float",
      equipment: [],
    },
  ],

  garnish:
    "Garnish with pineapple wedge, maraschino cherry, and fresh mint sprig. Serve with a colorful straw.",

  notes:
    "For extra tropical flavor, rim the glass with toasted coconut flakes before adding ice.",

  nutrition: {
    calories: 285,
    alcoholContent: 18,
  },
};
