import { BotIcon, BoxIcon, Brain, Globe, Lock } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemo() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-200 text-center mt-8 md:mt-12 lg:mt-36 mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 max-w-4xl mx-auto tracking-tight animate-fade-in">
        Why OpenPolitica?
      </h1>
      <ul className="grid grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 xl:gap-6 xl:max-h-[36rem] xl:grid-rows-2 max-w-7xl mx-auto">
        <GridItem
          area="xl:[grid-area:1/1/2/5]"
          icon={<Lock className="h-5 w-5 text-white/80" />}
          title="You Own Your Data"
          description="Every comment, vote, journal entry, and interaction enriches your AI-generated user profile. You control how it's used and who can access it."
        />

        <GridItem
          area="xl:[grid-area:2/1/3/5]"
          icon={<Brain className="h-5 w-5 text-white/80" />}
          title="Monetize Your Mind"
          description="Turn your digital self into a passive income stream. Choose to sell curated insights to researchers, brands, and organizations—only with your consent."
        />

        <GridItem
          area="xl:[grid-area:1/5/3/8]"
          icon={<Globe className="h-5 w-5 text-white/80" />}
          title="Web3 Privacy"
          description="Your data is anonymized, encrypted, and stored securely using Web3 infrastructure. You stay in control."
        />

        <GridItem
          area="xl:[grid-area:1/8/2/13]"
          icon={<BoxIcon className="h-5 w-5 text-white/80" />}
          title="Zero Bots, Zero Dupes"
          description="Every user is verified. Our platform is 100% human, enabling real conversations, real debates, and real data."
        />

        <GridItem
          area="xl:[grid-area:2/8/3/13]"
          icon={<BotIcon className="h-5 w-5 text-white/80" />}
          title="AI in Everything"
          description="From intelligent feed curation to dataset creation, AI is seamlessly integrated into every feature, making the platform smarter, more personalized, and more valuable for you."
        />
      </ul>
    </>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-neutral-700/50 bg-black backdrop-blur-sm p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 rounded-xl p-4 sm:p-5 md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-neutral-600/50 bg-neutral-800/50 p-2.5">
              {icon}
            </div>
            <div className="space-y-2">
              <h3 className="font-sans text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight">
                {title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-300/90 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};