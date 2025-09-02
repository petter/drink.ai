import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { recipeSchema, Recipe } from "@/lib/schemas/recipe";

export async function generateRecipe(prompt: string): Promise<Recipe> {
  const response = await generateObject({
    model: openai("gpt-4o-mini"),
    schema: recipeSchema,
    prompt: `Create a detailed cocktail recipe based on this request: "${prompt}"

Guidelines:
- Include realistic measurements and proper cocktail techniques
- Provide clear, step-by-step instructions
- Suggest appropriate garnishes and glassware
- Make the description enticing and vivid
- Include helpful pro tips in the notes section

Generate a complete recipe that would excite any drink enthusiast!`,
  });

  return response.object;
}
