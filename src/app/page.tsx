import Hero from "@/components/hero";
import StorySection from "@/components/story";
import React from "react";
import Services from "@/components/services";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import BeforeAfterSection from "@/components/transformations";

export default function Home() {
  return (
      <>
          <div
              className="w-full absolute top-0 left-0 min-h-[120vh]"

              style={{
                  background: 'radial-gradient(ellipse 140% 80% at 50% 0%, #fcd34d 0%, #fde68a 15%, #fed7aa 35%, #fecaca 55%, #fef3c7 75%, #FFF1F2 100%)',
              }}
          ></div>
          <div
              className="min-h-screen w-full bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,theme(colors.pink.50)_0%,theme(colors.rose.50)_50%,theme(colors.stone.50)_100%)]"
          >

              <Hero/>
          <StorySection/>
          <BeforeAfterSection/>
          <Services/>


          <Cta/>
          <Contact/>

          <Footer/>
          </div>
          {/*<AiChat/>*/}

      </>
  );
}
