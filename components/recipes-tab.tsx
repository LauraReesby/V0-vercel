import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RecipesTab() {
  return (
    <Card className="border-secondary border-2">
      <CardHeader>
        <CardTitle className="text-2xl text-secondary">Signature Recipes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-bold text-lg text-primary">The Classic Swamp Ass</h3>
          <p className="text-muted-foreground">For a 25-gallon batch:</p>
          <ul className="list-decimal list-inside space-y-1 mt-2">
            <li>10 Gallons of your favorite Tequila</li>
            <li>5 Gallons of Triple Sec</li>
            <li>7.5 Gallons of fresh Lime Juice</li>
            <li>2.5 Gallons of Simple Syrup</li>
            <li>A splash of swamp water (optional, for authenticity)</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg text-primary">Gator-Bait Gold</h3>
          <p className="text-muted-foreground">For a 25-gallon batch:</p>
          <ul className="list-decimal list-inside space-y-1 mt-2">
            <li>12 Gallons of Reposado Tequila</li>
            <li>6 Gallons of Grand Marnier</li>
            <li>7 Gallons of fresh Lime Juice</li>
            <li>A hint of agave nectar to taste</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
