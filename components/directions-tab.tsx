import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const steps = [
  {
    title: "Unbox & Assemble",
    description:
      "Connect the three main components. If you need a wrench, you're doing it wrong. It should feel... forceful.",
  },
  {
    title: "Sanitize",
    description: "Run a cleaning cycle with industrial-grade sanitizer or cheap vodka. Your choice.",
  },
  {
    title: "Load Ingredients",
    description: "Pour liquids directly into the main tank. Do not pre-mix. The Rig knows what to do.",
  },
  {
    title: "Engage Chiller",
    description: "Flip the big, satisfyingly chunky red switch. Wait for the low hum to become a mild roar.",
  },
  { title: "Dispense & Dominate", description: "Open the spouts. Fill vessels. Achieve legendary status." },
]

export function DirectionsTab() {
  return (
    <div>
      <h2 className="text-4xl font-black mb-6">Operating Instructions</h2>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-start gap-4 p-4 border-2 border-black bg-muted">
            <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground font-black text-3xl">
              {index + 1}
            </div>
            <div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-lg">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Alert className="mt-8 border-4 border-black bg-accent text-black shadow-brutal">
        <AlertCircle className="h-6 w-6 text-black" />
        <AlertTitle className="text-xl font-black">Safety Warning</AlertTitle>
        <AlertDescription className="text-lg font-mono">
          Never look directly into the mixing vortex. Do not operate within 10 feet of sensitive electronic equipment.
          The manufacturer is not responsible for spontaneous dance parties or questionable life choices.
        </AlertDescription>
      </Alert>
    </div>
  )
}
