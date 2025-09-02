"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/card";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🏝️ Drink.AI
          </h1>
          <p className="text-xl text-cyan-100 font-light">
            Your tropical cocktail companion
          </p>
        </div>

        <Card>
          <div className="mb-6">
            <label
              htmlFor="prompt"
              className="block text-gray-800 text-lg font-medium mb-3"
            >
              What kind of drink are you craving? 🍹
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your perfect tropical drink... (e.g., something fruity with rum, or a refreshing mocktail)"
              className="w-full p-4 rounded-2xl bg-white border-2 border-gray-200 focus:border-orange-400 outline-none text-gray-800 placeholder-gray-500 text-lg min-h-[120px] resize-none transition-colors"
              rows={4}
            />
          </div>

          <button
            onClick={() =>
              startTransition(async () => {
                router.push(`/recipe/${encodeURIComponent(prompt)}`);
              })
            }
            disabled={!prompt.trim() || isPending}
            className="w-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-bold py-4 px-8 rounded-2xl text-xl shadow-lg hover:from-orange-500 hover:to-pink-600 transition-all duration-200 disabled:bg-gray-300 disabled:from-gray-300 disabled:to-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isPending ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Mixing your drink...
              </span>
            ) : (
              "Generate Recipe 🥥"
            )}
          </button>
        </Card>

        <div className="text-center mt-8">
          <p className="text-cyan-100 text-sm">
            Powered by AI • Made with ❤️ for tropical vibes
          </p>
        </div>
      </div>
    </div>
  );
}
