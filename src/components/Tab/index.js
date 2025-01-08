import Image from "next/image";

const dataTab = [
  {
    id: 1,
    title: "Diamond Mine",
    img: "/image/dm.png",
  },
  {
    id: 2,
    title: "VIP",
    img: "/image/vip.png",
  },
  {
    id: 3,
    title: "Promotion",
    img: "/image/pro.png",
  },
  {
    id: 4,
    title: "Hot Match",
    img: "/image/hot.png",
  },
  {
    id: 5,
    title: "P2P Transaction",
    img: "/image/p2p.png",
  },

  {
    id: 8,
    title: "Search",
    img: "/image/search.png",
    spBG: true,
  },
  {
    id: 6,
    title: "Games",
    img: "/image/game.png",
    spBG: true,
  },
  {
    id: 7,
    title: "Provider",
    img: "/image/provi.png",
    spBG: true,
  },
];

const TabMain = () => {
  return (
    <div className="container pb-7 lg:pt-0 pt-7">
      <div className="flex lg:justify-between justify-around">
        {dataTab.map((item, index) => {
          const isSearchTab = item.id === 8;
          return (
            <div
              key={index}
              className={`flex gap-2 items-center border-[1px] border-[#FFFFFF1A] rounded-lg px-4 lg:px-10 py-2 ${
                item.spBG ? "bg-[#12294A]" : ""
              } ${item.id <= 5 ? "hidden lg:block" : ""}`}
            >
              <Image
                aria-hidden
                src={item.img}
                alt={item.title}
                width={24}
                height={24}
                className="lg:block hidden"
              />
              <Image
                aria-hidden
                src={item.img}
                alt={item.title}
                width={18}
                height={18}
                className="lg:hidden block"
              />
              <p className="text-white text-sm lg:text-base">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabMain;
