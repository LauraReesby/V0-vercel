import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewTab } from "@/components/overview-tab"
import { RecipesTab } from "@/components/recipes-tab"
import { DirectionsTab } from "@/components/directions-tab"
import { ReviewsTab } from "@/components/reviews-tab"
import { StarIcon } from "lucide-react"

export function DesignSystem() {
  return (
    <div className="bg-background text-foreground font-sans">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <h1 className="text-xl font-bold text-primary">Bauhaus Brutalism</h1>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#" className="text-sm font-medium hover:text-primary">
              Products
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 md:grid-cols-2 md:px-6">
        <div className="flex flex-col gap-4">
          <Image
            src="/industrial-margarita-rig.png"
            alt="Industrial Margarita Rig"
            width={600}
            height={600}
            className="w-full border-4 border-primary object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-extrabold tracking-tighter text-primary">Industrial Margarita Rig</h1>
            <Badge variant="default" className="bg-primary text-primary-foreground">
              v3
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <StarIcon className="h-5 w-5 fill-accent stroke-accent" />
              <StarIcon className="h-5 w-5 fill-accent stroke-accent" />
              <StarIcon className="h-5 w-5 fill-accent stroke-accent" />
              <StarIcon className="h-5 w-5 fill-accent stroke-accent" />
              <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">(123 reviews)</span>
          </div>
          <p className="text-lg text-muted-foreground">
            The only margarita machine you'll ever need. Built with industrial-grade materials and a touch of Bauhaus
            brutality. Perfect for your next party or a quiet Tuesday.
          </p>
          <div className="text-5xl font-bold text-primary">$1,999.99</div>
          <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
            Buy Now
          </Button>
        </div>
      </main>

      <section className="container mx-auto px-4 pb-8 md:px-6">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-card text-muted-foreground">
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
      </section>

      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground md:px-6">
          <p>&copy; 2025 Bauhaus Brutalism. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
