import { z } from "zod";

const unitSchema = z.enum([
  "oz",
  "ml", 
  "cl",
  "tsp",
  "tbsp",
  "cup",
  "dash",
  "splash",
  "pinch",
  "slice",
  "wedge",
  "sprig",
  "leaf",
  "piece",
  "drop"
]);

const ingredientTypeSchema = z.enum([
  "spirit",
  "liqueur", 
  "mixer",
  "juice",
  "syrup",
  "bitters",
  "garnish",
  "ice",
  "fruit",
  "herb",
  "spice",
  "other"
]);

const ingredientSchema = z.object({
  name: z.string().min(1),
  amount: z.number().positive().optional(),
  unit: unitSchema.optional(),
  type: ingredientTypeSchema,
  optional: z.boolean().default(false),
  notes: z.string().optional()
});

const techniqueSchema = z.enum([
  "shake",
  "stir", 
  "build",
  "muddle",
  "blend",
  "layer",
  "float",
  "strain",
  "double_strain"
]);

const equipmentSchema = z.enum([
  "shaker",
  "strainer", 
  "jigger",
  "muddler",
  "bar_spoon",
  "blender",
  "fine_strainer",
  "citrus_press",
  "knife",
  "cutting_board"
]);

const instructionSchema = z.object({
  step: z.number().positive(),
  description: z.string().min(1),
  technique: techniqueSchema.optional(),
  equipment: z.array(equipmentSchema).optional(),
  duration: z.string().optional()
});

const glassTypeSchema = z.enum([
  "highball",
  "rocks", 
  "coupe",
  "martini",
  "hurricane",
  "tiki_mug",
  "wine_glass",
  "shot_glass",
  "mason_jar",
  "collins",
  "old_fashioned"
]);

const iceTypeSchema = z.enum([
  "cubed",
  "crushed",
  "sphere", 
  "none",
  "pebble"
]);

const difficultySchema = z.enum(["easy", "medium", "hard"]);

const drinkTypeSchema = z.enum(["cocktail", "mocktail", "shot"]);

const flavorProfileSchema = z.enum([
  "sweet",
  "sour", 
  "bitter",
  "fruity",
  "tropical",
  "citrusy",
  "creamy",
  "spicy",
  "refreshing",
  "strong"
]);

export const recipeSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  type: drinkTypeSchema,
  difficulty: difficultySchema,
  prepTime: z.string(),
  servings: z.number().positive().default(1),
  
  glass: glassTypeSchema,
  ice: iceTypeSchema,
  
  flavorProfile: z.array(flavorProfileSchema),
  
  ingredients: z.array(ingredientSchema).min(1),
  instructions: z.array(instructionSchema).min(1),
  
  garnish: z.string().optional(),
  notes: z.string().optional(),
  
  nutrition: z.object({
    calories: z.number().optional(),
    alcoholContent: z.number().min(0).max(100).optional()
  }).optional()
});

export type Recipe = z.infer<typeof recipeSchema>;
export type Ingredient = z.infer<typeof ingredientSchema>;
export type Instruction = z.infer<typeof instructionSchema>;
export type Unit = z.infer<typeof unitSchema>;
export type IngredientType = z.infer<typeof ingredientTypeSchema>;
export type Technique = z.infer<typeof techniqueSchema>;
export type Equipment = z.infer<typeof equipmentSchema>;
export type GlassType = z.infer<typeof glassTypeSchema>;
export type IceType = z.infer<typeof iceTypeSchema>;
export type Difficulty = z.infer<typeof difficultySchema>;
export type DrinkType = z.infer<typeof drinkTypeSchema>;
export type FlavorProfile = z.infer<typeof flavorProfileSchema>;

export function validateRecipe(data: unknown): Recipe {
  return recipeSchema.parse(data);
}

export function isValidRecipe(data: unknown): data is Recipe {
  return recipeSchema.safeParse(data).success;
}