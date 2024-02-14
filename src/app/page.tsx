import Donate from "@/components/Donate/Donate";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Mission from "@/components/Mission/Mission";
import News from "@/components/News/News";
import Number from "@/components/Numbersection/Number";
import Search from "@/components/Search/Search";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
     <Hero/>
     <Search/>
     <Mission/>
     <Number/>
     <News/>
     <Donate/>
     <Footer/>
    </main>
  );
}
