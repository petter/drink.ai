import { z } from "zod";

const ingredientSchema = z.object({
  name: z.string().min(1),
  amount: z.number().positive().optional(),
  unit: z.string().optional(),
  type: z.string(),
  optional: z.boolean().default(false),
  notes: z.string().optional()
});

const instructionSchema = z.object({
  step: z.number().positive(),
  description: z.string().min(1),
  technique: z.string().optional(),
  equipment: z.array(z.string()).optional(),
  duration: z.string().optional()
});

export const recipeSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  type: z.string(),
  difficulty: z.string(),
  prepTime: z.string(),
  servings: z.number().positive().default(1),
  
  glass: z.string(),
  ice: z.string(),
  
  flavorProfile: z.array(z.string()),
  
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

export function validateRecipe(data: unknown): Recipe {
  return recipeSchema.parse(data);
}

export function isValidRecipe(data: unknown): data is Recipe {
  return recipeSchema.safeParse(data).success;
}