import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Party Pete",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Bought this for my daughter's 4th birthday. Best. Party. Ever. The other parents were both horrified and impressed. 10/10 would do it again.",
  },
  {
    name: "Brenda from HR",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    comment:
      "Our quarterly earnings call has never been more... fluid. Productivity is through the roof, or maybe that's just the ceiling spinning. Who knows!",
  },
  {
    name: "Anonymous Engineer",
    avatar: "/placeholder-user.jpg",
    rating: 4,
    comment:
      "The fluid dynamics are surprisingly robust, but the power draw tripped the main breaker for our entire city block. Worth it, but had to give it 4 stars for the city-wide blackout.",
  },
]

export function ReviewsTab() {
  return (
    <div>
      <h2 className="text-4xl font-black mb-6">Customer Feedback</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.name} className="border-2 border-black shadow-brutal">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="border-2 border-black">
                  <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                  <AvatarFallback>{review.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <p className="text-xl font-bold">{review.name}</p>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent-foreground fill-accent" />
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-muted-foreground" />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-mono">"{review.comment}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
