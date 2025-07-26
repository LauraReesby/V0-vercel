import { Zap, ShieldCheck, PartyPopper } from "lucide-react"
import Image from "next/image"

export function OverviewTab() {
  return (
    <section className="space-y-12 md:space-y-16">
      <div className="space-y-8 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
          The Ultimate Cajun Margarita Machine
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <div className="h-6 w-6 md:h-8 md:w-8 bg-red-600"></div>
          <div className="h-6 w-6 md:h-8 md:w-8 bg-blue-600"></div>
          <div className="h-6 w-6 md:h-8 md:w-8 bg-yellow-500"></div>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Engineered for the bayou, built for the party. Swamp Ass & Salt Rims delivers perfectly chilled margaritas
            with industrial-grade reliability.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white border-8 border-black p-6 md:p-8 shadow-brutal">
          <h2 className="text-2xl md:text-3xl font-black mb-6 uppercase border-b-4 border-black pb-2">
            WHY IT'S THE BEST, CHER
          </h2>
          <p className="text-base md:text-lg font-mono">
            Forget them fancy, fragile blenders. This ain't your mama's kitchen appliance. We're talkin' a rugged,
            no-nonsense, booze-chillin' workhorse. It's built with the same grit and determination as a gator in a turf
            war. Simple, powerful, and always ready for a good time.
          </p>
        </div>
        <div className="bg-black text-white border-8 border-black p-4 md:p-8 shadow-brutal-inverse">
          <Image
            src="/industrial-margarita-rig.png"
            alt="Industrial 3-gallon margarita rig for LSU tailgating"
            width={600}
            height={600}
            className="w-full h-auto border-4 border-white"
          />
        </div>
      </div>

      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase border-b-4 border-black pb-2 inline-block">
          KEY FEATURES
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-yellow-500 border-8 border-black p-6 shadow-brutal">
            <Zap className="h-10 w-10 md:h-12 md:w-12 mb-4" />
            <h3 className="text-xl md:text-2xl font-black mb-4 uppercase border-b-4 border-black pb-2">
              INDUSTRIAL STRENGTH
            </h3>
            <p className="text-base md:text-lg">
              Built from 100% pure, uncut, bayou-grade steel and plastic. Can survive a tailgate, a hurricane, and your
              cousin Skeeter.
            </p>
          </div>

          <div className="bg-blue-600 text-white border-8 border-black p-6 shadow-brutal">
            <ShieldCheck className="h-10 w-10 md:h-12 md:w-12 mb-4" />
            <h3 className="text-xl md:text-2xl font-black mb-4 uppercase border-b-4 border-white pb-2">
              CAJUN CERTIFIED
            </h3>
            <p className="text-base md:text-lg">
              Approved by a panel of experts from Grand Isle to Shreveport. If it's good enough for them, it's good
              enough for you.
            </p>
          </div>

          <div className="bg-red-600 text-white border-8 border-black p-6 shadow-brutal">
            <PartyPopper className="h-10 w-10 md:h-12 md:w-12 mb-4" />
            <h3 className="text-xl md:text-2xl font-black mb-4 uppercase border-b-4 border-white pb-2">PARTY READY</h3>
            <p className="text-base md:text-lg">
              Holds three gallons of pure joy. That's enough to make friends with the entire parking lot. Or just for
              you. We don't judge.
            </p>
          </div>
        </div>
      </section>
    </section>
  )
}
