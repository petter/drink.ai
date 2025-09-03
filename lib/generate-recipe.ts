import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { recipeSchema, Recipe } from "@/lib/schemas/recipe";

export async function generateRecipe(prompt: string): Promise<Recipe> {
  const response = await generateObject({
    model: openai("gpt-4o-mini"),
    schema: recipeSchema,
    prompt: `Create a detailed cocktail recipe based on this request: "${prompt}"

CRITICAL SCHEMA REQUIREMENTS:
- type: Must be exactly "cocktail", "mocktail", or "shot"
- difficulty: Must be exactly "easy", "medium", or "hard" 
- glass: Must be exactly one of: "highball", "rocks", "coupe", "martini", "hurricane", "tiki_mug", "wine_glass", "shot_glass", "mason_jar", "collins", "old_fashioned"
- ice: Must be exactly "cubed", "crushed", "sphere", "none", or "pebble"
- flavorProfile: Array with at least one of: "sweet", "sour", "bitter", "fruity", "tropical", "citrusy", "creamy", "spicy", "refreshing", "strong"
- ingredients: Array with at least 1 ingredient, each with type exactly: "spirit", "liqueur", "mixer", "juice", "syrup", "bitters", "garnish", "ice", "fruit", "herb", "spice", "other"
- ingredient.unit: Must be exactly one of: "oz", "ml", "cl", "tsp", "tbsp", "cup", "dash", "splash", "pinch", "slice", "wedge", "sprig", "leaf", "piece", "drop" (or omit entirely)
- instructions: Array with at least 1 step, numbered sequentially starting from 1
- instruction.technique: Must be exactly one of: "shake", "stir", "build", "muddle", "blend", "layer", "float", "strain", "double_strain" (or omit entirely)
- instruction.equipment: Array of exactly: "shaker", "strainer", "jigger", "muddler", "bar_spoon", "blender", "fine_strainer", "citrus_press", "knife", "cutting_board" (or omit entirely if no equipment needed)

Guidelines:
- If prompt is simple like "beer", create a beer cocktail or beer-based drink
- Include realistic measurements and proper cocktail techniques
- Provide clear, step-by-step instructions
- Suggest appropriate garnishes and glassware
- Make the description enticing and vivid
- Include helpful pro tips in the notes section
- NEVER use "none" for equipment - either omit the equipment field entirely or use empty array []
- NEVER use "garnish" as a technique - use "build", "shake", "stir", etc.

Generate a complete recipe that follows all schema requirements exactly!`,
  });

  return response.object;
}
