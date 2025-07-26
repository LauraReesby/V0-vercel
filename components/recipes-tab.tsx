export function RecipesTab() {
  return (
    <section className="space-y-12">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
          GATOR-APPROVED RECIPES
        </h2>
        <p className="text-xl max-w-2xl mx-auto">A few of our favorite concoctions to get you started.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white border-8 border-black p-8 shadow-brutal">
          <h3 className="text-2xl font-black mb-4 uppercase border-b-4 border-black pb-2">The Classic Swamp Water</h3>
          <p className="text-lg font-mono mb-4">The tried-and-true classic. Can't go wrong.</p>
          <ul className="list-disc list-inside font-mono space-y-2">
            <li>1 bottle (750ml) Tequila</li>
            <li>1/2 bottle (375ml) Triple Sec</li>
            <li>1 large can (12oz) frozen limeade</li>
            <li>Fill rest of the way with water</li>
          </ul>
        </div>

        <div className="bg-white border-8 border-black p-8 shadow-brutal">
          <h3 className="text-2xl font-black mb-4 uppercase border-b-4 border-black pb-2">Spicy Cypress Sipper</h3>
          <p className="text-lg font-mono mb-4">For those who like a little kick in the pants.</p>
          <ul className="list-disc list-inside font-mono space-y-2">
            <li>1 bottle (750ml) Tequila</li>
            <li>1/2 bottle (375ml) Triple Sec</li>
            <li>1 large can (12oz) frozen limeade</li>
            <li>4-5 sliced jalapeños (more if you're brave)</li>
            <li>Fill rest with water</li>
          </ul>
        </div>

        <div className="bg-white border-8 border-black p-8 shadow-brutal">
          <h3 className="text-2xl font-black mb-4 uppercase border-b-4 border-black pb-2">Bayou Berry Blitz</h3>
          <p className="text-lg font-mono mb-4">A sweeter option for a hot day.</p>
          <ul className="list-disc list-inside font-mono space-y-2">
            <li>1 bottle (750ml) Tequila</li>
            <li>1/2 bottle (375ml) Triple Sec</li>
            <li>1 large can (12oz) frozen strawberry mix</li>
            <li>1 cup fresh strawberries</li>
            <li>Fill rest with water</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
