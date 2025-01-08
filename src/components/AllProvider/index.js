import Image from "next/image";
const dataProvider = [
  {
    id: 1,
    img: "/image/a1.png",
    title: "Evolution",
    subtitle: "312 games",
  },
  {
    id: 2,
    img: "/image/a2.png",
    title: "Spribe",
    subtitle: "12 games",
  },
  {
    id: 3,
    img: "/image/a3.png",
    title: "VeliPlay",
    subtitle: "9 games",
  },
  {
    id: 4,
    img: "/image/a4.png",
    title: "Turbo Games",
    subtitle: "36 games",
  },
  {
    id: 5,
    img: "/image/a5.png",
    title: "SmartSoft",
    subtitle: "37 games",
  },
  {
    id: 6,
    img: "/image/a6.png",
    title: "SmartSoft",
    subtitle: "7 games",
  },
  {
    id: 7,
    img: "/image/a7.png",
    title: "BGaming",
    subtitle: "166 games",
  },
  {
    id: 8,
    img: "/image/a8.png",
    title: "Wazdan",
    subtitle: "199 games",
  },
];
const AllProvider = () => {
  return (
    <div className="container ">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="font-medium text-sm md:text-xl lg:text-3xl text-white">All Provider</h2>
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
      <div className="overflow-auto lg:overflow-hidden">
        <div className="flex justify-center gap-4 lg:w-full w-[1210px] ">
          {dataProvider.map((data) => {
            return (
              <div
                key={data.id}
                className="flex flex-col rounded-lg h-32 group overflow-hidden"
              >
                <div className="bg-[#12294A] px-8 py-4 h-16 group-hover:h-32 flex items-center duration-300 transition-all">
                  <Image
                    src={data.img}
                    alt="Globe icon"
                    width={93}
                    height={30}
                  />
                </div>
                <div className="h-16 group-hover:h-0 bg-[#F5F9FF0D] duration-300 transition-all text-center py-3 group-hover:py-0">
                  <h3 className="underline text-sm text-white">{data.title}</h3>
                  <p className="underline text-[11px] text-[#90A2BD]">
                    {data.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default AllProvider;
