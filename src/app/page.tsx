import Hero from "@/components/hero";
import StorySection from "@/components/story";
import React, {ReactNode} from "react";
import Services from "@/components/services";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import AiChat from "@/components/aichat";
import Contact from "@/components/contact";

const Background = () => {
    return (
        <div
            className="w-full absolute top-0 left-0 -z-10"
            style={{
                height: '200vh',
                background: 'radial-gradient(ellipse 140% 80% at 50% 0%, #fcd34d 0%, #fde68a 15%, #fed7aa 35%, #fecaca 55%, #fef3c7 75%, #FFF7D6 100%)',
            }}
        ></div>
    )
}

export default function Home() {
  return (
      <>
          <Background />
          <Hero/>
          <StorySection/>
          <Services/>


          <Cta/>
          <Contact/>

          <Footer/>
          {/*<AiChat/>*/}

      </>
  );
}
