/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ShMUOckf4fh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OverviewTab from "@/components/overview-tab"
import RecipesTab from "@/components/recipes-tab"
import DirectionsTab from "@/components/directions-tab"
import ReviewsTab from "@/components/reviews-tab"

export default function DesignSystem() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <header className="sticky top-0 z-10 bg-primary text-primary-foreground p-4 flex items-center justify-between border-b-4 border-accent">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Swamp Ass and Salt Rims Logo"
            width={80}
            height={80}
            className="border-2 border-accent"
          />
          <h1 className="text-2xl font-bold tracking-tighter">Swamp Ass and Salt Rims</h1>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" className="hover:bg-primary-foreground/10">
            Products
          </Button>
          <Button variant="ghost" className="hover:bg-primary-foreground/10">
            About
          </Button>
          <Button variant="ghost" className="hover:bg-primary-foreground/10">
            Contact
          </Button>
        </nav>
      </header>
      <main className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/industrial-margarita-rig.png"
              alt="Industrial Margarita Rig"
              width={600}
              height={600}
              className="w-full border-4 border-secondary"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-extrabold tracking-tighter">Industrial Margarita Rig</h1>
              <Badge variant="default" className="bg-accent text-accent-foreground text-lg">
                v3
              </Badge>
            </div>
            <p className="text-muted-foreground text-lg">
              The ultimate solution for high-volume, top-quality margaritas. Perfect for your next crawfish boil,
              festival, or industrial-scale celebration.
            </p>
            <div className="text-5xl font-bold text-primary">$1,999.99</div>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground border-2 border-accent"
              >
                Buy Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary hover:bg-primary/10 bg-transparent"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-muted">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="recipes">Recipes</TabsTrigger>
              <TabsTrigger value="directions">Directions</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <OverviewTab />
            </TabsContent>
            <TabsContent value="recipes">
              <RecipesTab />
            </TabsContent>
            <TabsContent value="directions">
              <DirectionsTab />
            </TabsContent>
            <TabsContent value="reviews">
              <ReviewsTab />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="bg-primary text-primary-foreground p-6 mt-12 border-t-4 border-accent">
        <div className="container mx-auto text-center">
          <p>© 2024 Swamp Ass and Salt Rims. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
