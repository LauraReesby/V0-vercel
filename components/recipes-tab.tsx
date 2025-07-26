import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recipes = [
  {
    title: "The Classic 'Swamp Ass' Margarita",
    description: "A timeless classic, supercharged. The name is a promise.",
    ingredients: [
      "30 Gallons Tequila",
      "20 Gallons Lime Juice",
      "10 Gallons Triple Sec",
      "1 Gallon 'Secret Ingredient'",
    ],
    color: "bg-secondary",
  },
  {
    title: "Purple People Pleaser",
    description: "A vibrant, grape-infused concoction that's dangerously delicious.",
    ingredients: ["30 Gallons Tequila", "20 Gallons Grape Soda", "10 Gallons Lime Juice", "A touch of glitter"],
    color: "bg-primary",
  },
  {
    title: "Liquid Gold Rush",
    description: "For the discerning party animal. Tastes like victory.",
    ingredients: [
      "30 Gallons Premium Añejo Tequila",
      "20 Gallons Fresh-Squeezed Lime",
      "10 Gallons Agave Nectar",
      "Edible Gold Flakes",
    ],
    color: "bg-accent",
  },
]

export function RecipesTab() {
  return (
    <div>
      <h2 className="text-4xl font-black mb-6">Official Rig Recipes</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.title} className={`border-4 border-black shadow-brutal ${recipe.color}`}>
            <CardHeader>
              <CardTitle className={`text-2xl ${recipe.color === "bg-accent" ? "text-black" : "text-white"}`}>
                {recipe.title}
              </CardTitle>
            </CardHeader>
            <CardContent className={`${recipe.color === "bg-accent" ? "text-black" : "text-white"}`}>
              <p className="mb-4">{recipe.description}</p>
              <h3 className="font-bold mb-2">Ingredients (50 Gallon Batch):</h3>
              <ul className="list-disc list-inside font-mono">
                {recipe.ingredients.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
