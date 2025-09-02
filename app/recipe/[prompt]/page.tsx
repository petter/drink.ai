import { DrinkTitle } from "./drink-title";
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

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 mb-6">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Your Request:
          </h2>
          <p className="text-cyan-100 text-lg bg-white/10 p-4 rounded-xl">
            "{prompt}"
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
          <div className="text-center text-white">
            <p className="text-xl">Recipe content will go here...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
