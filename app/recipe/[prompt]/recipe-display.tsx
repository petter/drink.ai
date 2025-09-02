import { Recipe } from "@/lib/schemas/recipe";
import { Card } from "@/components/card";

interface RecipeDisplayProps {
  recipe: Recipe;
}

export function RecipeDisplay({ recipe }: RecipeDisplayProps) {
  const formatAmount = (amount?: number, unit?: string) => {
    if (!amount) return unit || "";
    if (amount % 1 === 0) return `${amount} ${unit || ""}`;
    return `${amount} ${unit || ""}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column - Ingredients & Info */}
      <div className="space-y-6">
        {/* Recipe Overview */}
        <Card>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            {recipe.description}
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500 block">Difficulty</span>
              <span className="font-semibold text-gray-800 capitalize">{recipe.difficulty}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Prep Time</span>
              <span className="font-semibold text-gray-800">{recipe.prepTime}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Glass</span>
              <span className="font-semibold text-gray-800 capitalize">{recipe.glass.replace('_', ' ')}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Ice</span>
              <span className="font-semibold text-gray-800 capitalize">{recipe.ice}</span>
            </div>
          </div>
        </Card>

        {/* Ingredients */}
        <Card>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Ingredients</h3>
          <div className="space-y-3">
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-gray-800 font-medium">{ingredient.name}</span>
                <span className="text-gray-600 font-mono text-sm">
                  {formatAmount(ingredient.amount, ingredient.unit)}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Right Column - Instructions */}
      <div className="space-y-6">
        {/* Instructions */}
        <Card>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Instructions</h3>
          <div className="space-y-6">
            {recipe.instructions.map((instruction) => (
              <div key={instruction.step} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {instruction.step}
                </div>
                <p className="text-gray-700 leading-relaxed pt-1">{instruction.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Garnish & Notes */}
        {(recipe.garnish || recipe.notes) && (
          <Card>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Finishing Touches</h3>
            {recipe.garnish && (
              <div className="mb-4">
                <h4 className="text-gray-700 font-semibold mb-2">Garnish</h4>
                <p className="text-gray-600 leading-relaxed">{recipe.garnish}</p>
              </div>
            )}
            {recipe.notes && (
              <div>
                <h4 className="text-gray-700 font-semibold mb-2">Pro Tips</h4>
                <p className="text-gray-600 leading-relaxed">{recipe.notes}</p>
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}