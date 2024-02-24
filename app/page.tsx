import Discover from "@/components/Discover";
import HeroSection from "@/components/HeroSection";
import Popular from "@/components/Popular";
import Review from "@/components/Review";
import TopPackages from "@/components/TopPackages";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section>
        <div className="h-[70vh] md:min-h-screen w-full bg-[#162237] relative">
          <div className="h-[100PX] w-full bg-[#162237] absolute -top-[80px] clip-design"></div>
          <div className="content-popular w-[80%] mx-auto p-5">
            <h2 className="text-purple-400">Popularly</h2>
            <h2 className="text-white text-xl">
              Most Popular <br /> Trekking Desitantion
            </h2>
            <Popular />
          </div>
        </div>
      </section>

      <section className="w-full h-[100vh]">
        <Discover />
      </section>

      <section className="w-full min-h-screen bg-[#162237]">
        <TopPackages />
      </section>

      <section className="review-section bg-[#162237] py-[50px] lg:py-[150px]">
        <Review />
      </section>
      {/* <div className="h-screen w-full bg-slate-400"></div> */}
    </main>
  );
}
