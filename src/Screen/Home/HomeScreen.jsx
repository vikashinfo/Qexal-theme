import BlogSectons from "../../SECTION/Blog/BlogSection";
import ContactUS from "../../SECTION/ContactSection/ContactS";
import Demonstrations from "../../SECTION/DemonsSection/DemonsSec";
import FeaturesSection from "../../SECTION/Features/Feature";
import HeroSection from "../../SECTION/HomeSection/Hero";
import JoinCommunity from "../../SECTION/JoinCommunty/JoinCommnitys";
import PricingSection from "../../SECTION/PricingSections/Pricing";
import ServiceSction from "../../SECTION/ServiceS/Services";
import TeamCard from "../../SECTION/TemeSction/Temes";

function Home() {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div>
        <ServiceSction />
      </div>
      <div>
        <FeaturesSection />
      </div>
      <div>
        <Demonstrations />
      </div>
      <div>
        <PricingSection />
      </div>
      <div>
        <TeamCard />
      </div>
      <div>
        <BlogSectons />
      </div>
      <div>
        <JoinCommunity />
      </div>
      <div>
        <ContactUS />
      </div>
    </>
  );
}
export default Home;
