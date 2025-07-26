import Image from "next/image"
import { Button } from "@/components/ui/button"

export function OverviewTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">INDUSTRIAL MARGARITA RIG</h2>
        <p className="text-lg md:text-xl mb-6">
          Unleash the ultimate party machine. The Industrial Margarita Rig is engineered for high-volume frozen beverage
          production. Perfect for commercial use, large events, or the serious home entertainer.
        </p>
        <div className="flex gap-4">
          <Button className="bg-accent border-4 border-black text-black font-bold text-lg h-14 px-8 hover:bg-accent/90 shadow-brutal">
            BUY NOW - $2,499
          </Button>
        </div>
      </div>
      <div className="border-8 border-black bg-secondary">
        <Image
          src="/industrial-margarita-rig.png"
          alt="Industrial Margarita Rig"
          width={600}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}
