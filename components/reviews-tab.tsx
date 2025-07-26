import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ReviewsTab() {
  const reviews = [
    {
      name: "Chad Broseph",
      handle: "@FratStarChad",
      review:
        "This thing is an absolute UNIT. We cranked out margs for the whole chapter during rush week. Didn't even break a sweat. 10/10 would recommend.",
      rating: 5,
    },
    {
      name: "Brenda from Accounting",
      handle: "@BrendaLovesCats",
      review:
        "I bought this for my son's graduation party. It was a bit much, but everyone seemed to enjoy it. The noise was considerable.",
      rating: 4,
    },
    {
      name: "Mad Dog's Bar & Grill",
      handle: "@MadDogsOfficial",
      review:
        "Our old machine couldn't keep up on Cinco de Mayo. The Industrial Rig saved us. Paid for itself in one night. A commercial-grade beast.",
      rating: 5,
    },
  ]

  return (
    <div className="space-y-6">
      {reviews.map((review) => (
        <div key={review.name} className="bg-white border-4 border-black p-4 shadow-brutal">
          <div className="flex items-start gap-4">
            <Avatar className="h-12 w-12 border-2 border-black">
              <AvatarImage src={`/placeholder-user.jpg`} />
              <AvatarFallback>{review.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <p className="font-bold text-lg">{review.name}</p>
                <p className="text-sm text-gray-600">{review.handle}</p>
              </div>
              <p className="mt-1">{review.review}</p>
            </div>
            <div className="flex items-center gap-1 font-black text-2xl">
              <span>{review.rating}</span>
              <span>/</span>
              <span>5</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
