import Image from "next/image";
import CustomButton from "../CustomBtn";
const dataExGame = [
  {
    id: 1,
    img: "/image/g1.png",
    title: "100HP Gaming",
    hot: true,
    new: false,
  },
  {
    id: 2,
    img: "/image/g2.png",
    title: "VeliPlay",
    hot: true,
    new: false,
  },
  {
    id: 3,
    img: "/image/g3.png",
    title: "Evolution",
    hot: false,
    new: true,
  },
  {
    id: 4,
    img: "/image/g4.png",
    title: "VeliPlay",
    hot: false,
    new: true,
  },
  {
    id: 5,
    img: "/image/g5.png",
    title: "Onlyplay",
    hot: false,
    new: false,
  },
  {
    id: 6,
    img: "/image/g6.png",
    title: "VeliPlay",
    hot: false,
    new: false,
  },
  {
    id: 7,
    img: "/image/g7.png",
    title: "VeliPlay",
    hot: false,
    new: false,
  },
  {
    id: 8,
    img: "/image/g8.png",
    title: "VeliPlay",
    hot: false,
    new: false,
  },
  {
    id: 9,
    img: "/image/g9.png",
    title: "VeliPlay",
    hot: false,
    new: false,
  },
];
const ExGame = () => {
  return (
    <div className="container pt-8 pb-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="font-medium text-sm md:text-xl lg:text-3xl text-white">
            Exclusive Games
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="lg:block hidden">SEE ALL</h3>
          <div>
            <Image
              aria-hidden
              src="/image/see.png"
              alt="Globe icon"
              width={18}
              height={18}
            />
          </div>
        </div>
      </div>
      <div className=" overflow-auto lg:overflow-hidden">
        <div className="flex gap-4 w-[1210px] lg:w-[1625px]">
          {dataExGame.map((item) => {
            return (
              <div key={item.id} className="relative group">
                <Image
                  aria-hidden
                  src={item.img}
                  alt={item.title}
                  width={168}
                  height={210}
                  className="lg:block hidden"
                />
                <Image
                  aria-hidden
                  src={item.img}
                  alt={item.title}
                  width={120}
                  height={160}
                  className="lg:hidden block"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col gap-8 justify-center items-center">
                    <Image
                      aria-hidden
                      src="/image/play.png"
                      alt="Play"
                      width={80}
                      height={80}
                      className="lg:block hidden"
                    />
                    <Image
                      aria-hidden
                      src="/image/play.png"
                      alt="Play"
                      width={60}
                      height={60}
                      className="lg:hidden block"
                    />

                    <CustomButton
                      bgColor="bg-[#e2e8f096]"
                      textColor="text-white"
                      borderRadius="rounded-lg"
                      className="text-[10px] lg:text-sm px-3 py-2 hover:bg-[#1875f2]"
                    >
                      DEMO
                    </CustomButton>
                  </div>
                </div>
                <div className="absolute bottom-0 flex items-center justify-center w-full">
                  <p className="text-[8px] pb-[6px] text-white">{item.title}</p>
                </div>
                {item.hot && (
                  <Image
                    aria-hidden
                    src="/image/ab-hot.png"
                    alt={item.title}
                    width={36}
                    height={21}
                    className="absolute top-2 lg:top-4 left-0"
                  />
                )}
                {item.new && (
                  <Image
                    aria-hidden
                    src="/image/ab-new.png"
                    alt={item.title}
                    width={36}
                    height={21}
                    className="absolute top-2 lg:top-4 left-0"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExGame;
