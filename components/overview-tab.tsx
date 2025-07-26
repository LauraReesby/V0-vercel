import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function OverviewTab() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div>
        <Card className="border-4 border-black shadow-brutal">
          <CardHeader>
            <Image
              src="/industrial-margarita-rig.png"
              alt="Industrial Margarita Rig"
              width={600}
              height={600}
              className="w-full h-auto border-2 border-black"
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl mb-2">The Ultimate Party Machine</CardTitle>
            <p className="text-lg">
              Engineered for maximum output and relentless fun. Our Industrial Margarita Rig is built with high-grade
              stainless steel, a 5-gallon capacity tank, and a proprietary flash-chilling system. Perfect for
              warehouses, music festivals, and very serious backyard parties.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-6">
        <h2 className="text-4xl font-black">Specifications</h2>
        <ul className="list-disc list-inside font-mono text-lg space-y-2">
          <li>5-Gallon (19L) Capacity</li>
          <li>Food-Grade Stainless Steel Construction</li>
          <li>Dual-Spout for Competitive Dispensing</li>
          <li>1.21 Gigawatt Flash-Chiller</li>
          <li>Easy-to-Clean, Hard-to-Break</li>
        </ul>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-primary text-primary-foreground text-md py-1 px-3">Heavy Duty</Badge>
          <Badge className="bg-secondary text-secondary-foreground text-md py-1 px-3">Party-Proof</Badge>
          <Badge className="bg-accent text-accent-foreground text-md py-1 px-3">Biohazard-Ready</Badge>
        </div>
        <Button
          size="lg"
          className="w-full py-6 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-black shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1"
        >
          ORDER NOW - $1,999.99
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="w-full py-4 text-lg font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground border-2 border-black shadow-brutal active:shadow-none active:translate-x-1 active:translate-y-1"
        >
          Request Bulk Discount
        </Button>
      </div>
    </div>
  )
}
