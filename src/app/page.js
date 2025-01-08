import AllProvider from "@/components/AllProvider";
import Banner from "@/components/Banner";
import ExGame from "@/components/ExGame";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TabMain from "../components/Tab/index";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-8 pb-10 px-4 overflow-hidden">
        <Banner />
        <TabMain />
        <ExGame />
        <AllProvider />
      </main>
      <Footer />

      <div className="bg-[#03193A] py-10 px-4 lg:hidden block">
        <div className="container">
          <div className="flex w-full items-center justify-center gap-6 flex-wrap">
            {["f1", "f2", "f3", "f4", "f5"].map((icon) => (
              <div key={icon} className="flex">
                <Image
                  aria-hidden
                  src={`/image/${icon}.png`}
                  alt="Social icon"
                  width={110}
                  height={30}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
