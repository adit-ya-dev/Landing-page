
import { MarqueeDemo } from '@/component/faqs';
import Footer from '@/component/footer';
import OpenPoliticaLanding from '@/component/Homepage'; 
import OpenPoliticaFeatures from '@/component/socials';
import { GlowingEffectDemo } from '@/component/subheader';

export default function Page() {
  return (
    <div>
      <OpenPoliticaLanding />
      <GlowingEffectDemo />
      <OpenPoliticaFeatures/>
      <MarqueeDemo/>
      <Footer/>
     
    </div>
  );
}