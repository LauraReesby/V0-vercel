export function DirectionsTab() {
  return (
    <section className="space-y-12">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
          HOW TO WRANGLE THE BEAST
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          It's easier than wrestling a gator. Just follow these simple steps.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white border-8 border-black p-6 md:p-8 shadow-brutal">
          <div className="bg-red-600 text-white h-16 w-16 flex items-center justify-center text-4xl font-black border-4 border-black mb-4">
            1
          </div>
          <h3 className="text-xl md:text-2xl font-black mb-4 uppercase border-b-4 border-black pb-2">
            UNBOX & ASSEMBLE
          </h3>
          <p className="text-base md:text-lg font-mono">
            Take it out the box. Put the stand together. If you can build with LEGOs, you can do this. No screws, no
            fuss.
          </p>
        </div>

        <div className="bg-white border-8 border-black p-6 md:p-8 shadow-brutal">
          <div className="bg-blue-600 text-white h-16 w-16 flex items-center justify-center text-4xl font-black border-4 border-black mb-4">
            2
          </div>
          <h3 className="text-xl md:text-2xl font-black mb-4 uppercase border-b-4 border-black pb-2">ADD THE MIX</h3>
          <p className="text-base md:text-lg font-mono">
            Pour in your favorite margarita mix, tequila, and triple sec. See our recipes tab if you need some
            inspiration, you rascal.
          </p>
        </div>

        <div className="bg-white border-8 border-black p-6 md:p-8 shadow-brutal">
          <div className="bg-yellow-500 text-black h-16 w-16 flex items-center justify-center text-4xl font-black border-4 border-black mb-4">
            3
          </div>
          <h3 className="text-xl md:text-2xl font-black mb-4 uppercase border-b-4 border-black pb-2">ICE IT DOWN</h3>
          <p className="text-base md:text-lg font-mono">
            Fill 'er up with ice. The more the better. You want it colder than a mother-in-law's stare. Give it a good
            stir.
          </p>
        </div>

        <div className="bg-white border-8 border-black p-6 md:p-8 shadow-brutal">
          <div className="bg-black text-white h-16 w-16 flex items-center justify-center text-4xl font-black border-4 border-black mb-4">
            4
          </div>
          <h3 className="text-xl md:text-2xl font-black mb-4 uppercase border-b-4 border-black pb-2">
            DISPENSE & ENJOY
          </h3>
          <p className="text-base md:text-lg font-mono">
            Put your cup under the spigot and let the good times flow. Garnish with a salt rim and a lime. Or don't.
            You're the boss.
          </p>
        </div>
      </div>
    </section>
  )
}
