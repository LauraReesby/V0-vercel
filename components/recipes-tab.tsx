import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecipesTab() {
  const recipes = [
    {
      title: "THE CLASSIC RIG",
      description: "The one that started it all. A perfect balance of tart, sweet, and tequila.",
      ingredients: ["3 Gallons Tequila Blanco", "1.5 Gallons Lime Juice", "1 Gallon Triple Sec", "50 lbs Ice"],
    },
    {
      title: "BAYOU BLASTER",
      description: "A murky, potent concoction with a hint of melon. Not for the faint of heart.",
      ingredients: ["3 Gallons Tequila Reposado", "1 Gallon Midori", "1.5 Gallons Sour Mix", "50 lbs Ice"],
    },
    {
      title: "VOODOO VENOM",
      description: "Jalapeño-infused tequila brings the heat. The mango puree cools it down. A paradox in a glass.",
      ingredients: ["3 Gallons Jalapeño Tequila", "2 Gallons Mango Puree", "0.5 Gallons Lime Juice", "50 lbs Ice"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Card key={recipe.title} className="bg-white border-4 border-black shadow-brutal flex flex-col">
          <CardHeader className="border-b-4 border-black bg-accent p-4">
            <CardTitle className="font-black tracking-tighter text-2xl text-black">{recipe.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex-grow">
            <p className="mb-4">{recipe.description}</p>
            <ul className="list-disc pl-5 font-mono text-sm">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
