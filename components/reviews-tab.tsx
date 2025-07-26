import { Star } from "lucide-react"

export function ReviewsTab() {
  return (
    <section className="space-y-12">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
          WHAT THE CAJUNS ARE SAYIN'
        </h2>
        <p className="text-xl max-w-2xl mx-auto">Don't take our word for it. Here's what real folks think.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white border-8 border-black p-8 shadow-brutal flex flex-col">
          <div className="flex mb-2">
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
          </div>
          <blockquote className="text-lg font-mono italic flex-grow">
            "I brought this to the tailgate and became an instant legend. My brother-in-law tried to 'borrow' it. I told
            him to get his own."
          </blockquote>
          <p className="text-right font-bold mt-4">- Boudreaux from Thibodaux</p>
        </div>

        <div className="bg-white border-8 border-black p-8 shadow-brutal flex flex-col">
          <div className="flex mb-2">
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
          </div>
          <blockquote className="text-lg font-mono italic flex-grow">
            "This thing is tougher than a two-dollar steak. We dropped it off the truck, hosed it off, and it still
            worked perfectly. 10/10."
          </blockquote>
          <p className="text-right font-bold mt-4">- T-Claude from Lafayette</p>
        </div>

        <div className="bg-white border-8 border-black p-8 shadow-brutal flex flex-col">
          <div className="flex mb-2">
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
          </div>
          <blockquote className="text-lg font-mono italic flex-grow">
            "Finally, a margarita machine that understands me. It's loud, it's proud, and it makes a damn good drink.
            Laissez les bons temps rouler!"
          </blockquote>
          <p className="text-right font-bold mt-4">- Marie from New Orleans</p>
        </div>
      </div>
    </section>
  )
}
