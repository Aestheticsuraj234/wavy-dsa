import Benefits from "./_components/benefits";
import Collaboration from "./_components/collaboration";
import Footer from "./_components/footer";
import Header from "./_components/header";
import Hero from "./_components/hero";
import Pricing from "./_components/pricing";
import Roadmap from "./_components/roadmap";
import Services from "./_components/services";
import ButtonGradient from "@/public/assets/assets/svg/ButtonGradient"

export default function Home() {
    return (
        <>

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
    )
}