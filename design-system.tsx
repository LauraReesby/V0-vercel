import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewTab } from "@/components/overview-tab"
import { RecipesTab } from "@/components/recipes-tab"
import { DirectionsTab } from "@/components/directions-tab"
import { ReviewsTab } from "@/components/reviews-tab"

export default function DesignSystem() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <header className="flex flex-col md:flex-row items-center justify-between mb-8 p-4 border-4 border-black bg-accent shadow-brutal">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={80} height={80} className="border-2 border-black" />
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-black">Industrial Margarita Rig</h1>
            <p className="font-mono text-black">Unleash the Fiesta</p>
          </div>
        </div>
      </header>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-transparent p-0">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-brutal-inverse border-2 border-black text-lg font-bold py-3 focus:bg-accent"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="recipes"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-brutal-inverse border-2 border-black text-lg font-bold py-3 focus:bg-accent"
          >
            Recipes
          </TabsTrigger>
          <TabsTrigger
            value="directions"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-brutal-inverse border-2 border-black text-lg font-bold py-3 focus:bg-accent"
          >
            Directions
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-brutal-inverse border-2 border-black text-lg font-bold py-3 focus:bg-accent"
          >
            Reviews
          </TabsTrigger>
        </TabsList>
        <div className="border-4 border-black mt-[-2px] bg-white p-4 md:p-8 shadow-brutal">
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
        </div>
      </Tabs>
    </div>
  )
}
