import Footer from "@/components/common/Footer";
import { SwiperIcon } from "@/components/common/Icon";
import Navbar from "@/components/common/Navbar";
import Awesome from "@/components/home/Awesome";
import Experiments from "@/components/home/Experiments";
import Floral from "@/components/home/Floral";
import GetStarted from "@/components/home/GetStarted";
import Hero from "@/components/home/Hero";

import WhyChoose from "@/components/home/WhyChoose";
import WhyMake from "@/components/home/WhyMake";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyMake />
      <WhyChoose />
      <Experiments />

      <Floral />

      <Awesome />
      <GetStarted />
      <Footer />
    </>
  );
}
