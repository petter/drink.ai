import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

interface DrinkTitleProps {
  prompt: string;
}

export async function DrinkTitle({ prompt }: DrinkTitleProps) {
  const response = await generateText({
    model: openai("gpt-4o-mini"),
    prompt: `Generate a creative, catchy name for a tropical cocktail based on this description: "${prompt}". Return only the name, no quotes or extra text. Make it sound fun and tropical.`,
    maxOutputTokens: 20,
  });

  return (
    <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-2">
      🍹 {response.text}
    </h1>
  );
}
