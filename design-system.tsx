import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { OverviewTab } from "@/components/overview-tab"
import { RecipesTab } from "@/components/recipes-tab"
import { DirectionsTab } from "@/components/directions-tab"
import { ReviewsTab } from "@/components/reviews-tab"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function DesignSystem() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <header className="p-4 flex justify-between items-center border-b-4 border-primary">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">Bauhaus Brutalist v3</h1>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-2">
            <Button variant="ghost">Products</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <main className="p-4 md:p-8">
        <Card className="border-4 border-secondary">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <Image
                  src="/industrial-margarita-rig.png"
                  alt="Industrial Margarita Rig"
                  width={600}
                  height={600}
                  className="w-full border-4 border-primary"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-primary">Industrial Margarita Rig</h2>
                <p className="text-lg">
                  The only solution for high-volume, precision-crafted margaritas. Built with industrial-grade materials
                  and Bauhaus principles, this rig is the ultimate statement piece for any serious connoisseur or
                  establishment.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-accent">$1,999.99</span>
                  <span className="text-muted-foreground line-through">$2,499.99</span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 border-2 border-foreground"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 border-2 border-primary">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="recipes">Recipes</TabsTrigger>
            <TabsTrigger value="directions">Directions</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4 p-6 border-2 border-secondary">
            <OverviewTab />
          </TabsContent>
          <TabsContent value="recipes" className="mt-4 p-6 border-2 border-secondary">
            <RecipesTab />
          </TabsContent>
          <TabsContent value="directions" className="mt-4 p-6 border-2 border-secondary">
            <DirectionsTab />
          </TabsContent>
          <TabsContent value="reviews" className="mt-4 p-6 border-2 border-secondary">
            <ReviewsTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
