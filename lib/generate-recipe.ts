import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { recipeSchema, Recipe } from "@/lib/schemas/recipe";

export async function generateRecipe(prompt: string): Promise<Recipe> {
  const response = await generateObject({
    model: openai("gpt-4o-mini"),
    schema: recipeSchema,
    prompt: `Create a detailed cocktail recipe based on this request: "${prompt}"

GUIDELINES FOR RECIPE FIELDS:
- type: Use "cocktail", "mocktail", or "shot"
- difficulty: Use "easy", "medium", or "hard" 
- glass: Use common glass types like "highball", "rocks", "coupe", "martini", "hurricane", etc.
- ice: Use "cubed", "crushed", "sphere", "none", or "pebble"
- flavorProfile: Include descriptive flavors like "sweet", "sour", "bitter", "fruity", "tropical", "citrusy", "creamy", "spicy", "refreshing", "strong"
- ingredients: Include at least 1 ingredient with appropriate types like "spirit", "liqueur", "mixer", "juice", "syrup", "bitters", "garnish", etc.
- ingredient.unit: Use standard units like "oz", "ml", "cl", "tsp", "tbsp", "cup", "dash", "splash", etc.
- instructions: Include at least 1 step, numbered sequentially starting from 1
- instruction.technique: Use common techniques like "shake", "stir", "build", "muddle", "blend", "layer", "float", "strain", etc.
- instruction.equipment: Use common bar tools like "shaker", "strainer", "jigger", "muddler", "bar_spoon", etc.

Guidelines:
- If prompt is simple like "beer", create a beer cocktail or beer-based drink
- Include realistic measurements and proper cocktail techniques
- Provide clear, step-by-step instructions
- Suggest appropriate garnishes and glassware
- Make the description enticing and vivid
- Include helpful pro tips in the notes section
Generate a complete, realistic recipe!`,
  });

  return response.object;
}
