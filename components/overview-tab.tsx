import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OverviewTab() {
  return (
    <Card className="border-primary border-2">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Product Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          The Industrial Margarita Rig v3 is engineered for maximum output and unflinching reliability. Constructed from
          food-grade stainless steel and powered by a robust 1.5 horsepower motor, this machine can churn out up to 50
          gallons of perfectly chilled margaritas per hour.
        </p>
        <h3 className="font-bold text-lg text-secondary">Key Features:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Massive Capacity:</strong> 25-gallon insulated tank keeps your mix cold for hours.
          </li>
          <li>
            <strong>High-Powered Blending:</strong> Commercial-grade motor ensures a smooth, consistent texture every
            time.
          </li>
          <li>
            <strong>Durable Construction:</strong> Built with 304 stainless steel for easy cleaning and longevity.
          </li>
          <li>
            <strong>Easy-Pour Spigot:</strong> High-flow spigot for rapid serving.
          </li>
          <li>
            <strong>Brutalist Aesthetic:</strong> No-nonsense design that means business.
          </li>
        </ul>
      </CardContent>
    </Card>
  )
}
