import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { StarIcon } from "lucide-react"

export default function ReviewsTab() {
  const reviews = [
    {
      name: "T-Boy Broussard",
      initials: "TB",
      rating: 5,
      review:
        "Dis t'ing is da real deal, cher. We used it for da Boucherie and it kept up wit' all my cousins. Dat's sayin' somethin'.",
    },
    {
      name: "Chadwick Worthington III",
      initials: "CW",
      rating: 4,
      review:
        "A tad brutish for my polo club's annual gala, but I must admit, its efficiency is undeniable. The margaritas were, dare I say, sublime. Lost a star for the rather uncouth name.",
    },
    {
      name: "Big Liz",
      initials: "BL",
      rating: 5,
      review:
        "Bought this for my biker bar. The boys love it. It's survived two brawls and a dropped jukebox. Built like a tank. A tank that serves booze.",
    },
  ]

  return (
    <Card className="border-primary border-2">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Customer Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b-2 border-muted pb-4 last:border-b-0">
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12 border-2 border-secondary">
                <AvatarFallback className="bg-primary text-primary-foreground">{review.initials}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-bold">{review.name}</h4>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? "text-accent fill-accent" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-2 text-muted-foreground italic">"{review.review}"</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
