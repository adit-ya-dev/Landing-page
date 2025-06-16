
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";


const reviews = [
  {
    name: "Aditya",
    username: "Is my data safe?",
    body: "Yes. We use decentralized Web3 protocols to store and anonymize your data. You control access at every step.",
    img: `https://api.dicebear.com/8.x/avataaars/svg?seed=Aditya`,
  },
  {
    name: "Sarthak",
    username: "Who buys the data?",
    body: "Ethical researchers, brands, and organizations who agree to our strict data use policies.",
    img: `https://api.dicebear.com/8.x/avataaars/svg?seed=Sarthak`,
  },
  {
    name: "Ajith",
    username: "Can I delete my data anytime?",
    body: "Yes. You can export or delete your entire profile with one click.",
    img: `https://api.dicebear.com/8.x/avataaars/svg?seed=Ajith`,
  },
  {
    name: "Fidaini",
    username: "What if I do not want to sell my data?",
    body: "No problem. You can still use all features without ever selling your data. Everything is opt-in and fully under your control..",
    img: `https://api.dicebear.com/8.x/avataaars/svg?seed=Fidaini`,
  },
  {
    name: "Karan",
    username: "Can I see what buyers are using my data for?",
    body: "Yes. Before any sale, you will see full transparency into who the buyer is, their intended use, and the data being requested.",
    img: `https://api.dicebear.com/8.x/avataaars/svg?seed=Karan`,
  },
  {
    name: "Ganesh",
    username: "What happens if I change my mind after selling data?",
    body: "You can revoke future access at any time. Past purchases remain valid, but your data won’t be included in future datasets.",
    img: `https://api.dicebear.com/8.x/avataaars/svg?seed=Ganesh`,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={`${name}'s avatar`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <h1 className="text-3xl font-bold mt-36">FAQs</h1>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}