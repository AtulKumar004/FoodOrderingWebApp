
import Header from "../components/header/header";
import Hero from "../components/Hero/hero";
import Image from "next/image";
import ServiceCard from "../components/Cards/serviceCard"

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
      <main className="container mx-auto">
        <div className="grid grid-cols-4 gap-4 min-h-[900px] h-[100vh]  mt-10">

          <div className="flex justify-end col-span-3 deliveryService relative">
            <p className="font-[800] text-[48px]  text-[#000000] w-[45%]" style={{ lineHeight: "58px" }}>Why We Are The Best?</p>
           
          </div>
          <div className="col-span-1 flex flex-col justify-end gap-4 pb-16">
            <ServiceCard bg="#289402" text={"We serve you the best of fresh, nutrient-rich and healthy groceries"} />
            <ServiceCard bg="#FFB800" text={"Swift Delivery"} />
            <ServiceCard bg="#289402" text={"Great Refund Policy"} />
            <ServiceCard bg="#FFB800" text={"Wide coverage Map"} />

          </div>
        </div>

      </main>
    </>
  );
}






