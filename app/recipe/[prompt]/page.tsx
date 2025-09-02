import { DrinkTitle } from "./drink-title";
import { RecipeDisplay } from "./recipe-display";
import { exampleRecipe } from "@/lib/schemas/example-recipe";
import { Card } from "@/components/card";
import Link from "next/link";

interface RecipePageProps {
  params: Promise<{
    prompt: string;
  }>;
}

export default async function RecipePage({ params }: RecipePageProps) {
  const prompt = decodeURIComponent((await params).prompt);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <Link
            href="/"
            className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
          >
            ← Back
          </Link>

          <DrinkTitle prompt={prompt} />

          <div className="w-20"></div>
        </div>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Request:
          </h2>
          <p className="text-gray-600 text-lg bg-gray-50 p-4 rounded-xl border">
            "{prompt}"
          </p>
        </Card>

        <RecipeDisplay recipe={exampleRecipe} />
      </div>
    </div>
  );
}
