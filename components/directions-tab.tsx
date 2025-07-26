import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DirectionsTab() {
  return (
    <Card className="border-accent border-2">
      <CardHeader>
        <CardTitle className="text-2xl text-accent-foreground">Operating Instructions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <h3 className="font-bold inline">Assembly:</h3>
            <p className="ml-4">
              Place the rig on a stable, level surface. Ensure the spigot is securely fastened and in the 'off'
              position. Connect the power cord to a dedicated 20-amp circuit.
            </p>
          </li>
          <li>
            <h3 className="font-bold inline">Mixing:</h3>
            <p className="ml-4">
              Pour all liquid ingredients directly into the main tank. Do NOT add ice to the main tank; the rig's
              cooling system will chill the mixture.
            </p>
          </li>
          <li>
            <h3 className="font-bold inline">Operation:</h3>
            <p className="ml-4">
              Secure the lid. Flip the main power switch to 'ON'. The internal agitator and cooling unit will begin to
              operate. Allow 30-45 minutes for the initial batch to reach optimal temperature and consistency.
            </p>
          </li>
          <li>
            <h3 className="font-bold inline">Serving:</h3>
            <p className="ml-4">
              Dispense as needed using the high-flow spigot. The machine will continue to churn and cool the remaining
              mixture.
            </p>
          </li>
          <li>
            <h3 className="font-bold inline">Cleaning:</h3>
            <p className="ml-4">
              Drain any remaining liquid. Rinse the tank with warm water. For a deep clean, use a food-safe sanitizer
              and run the agitator for 5 minutes before draining and air-drying.
            </p>
          </li>
        </ol>
      </CardContent>
    </Card>
  )
}
