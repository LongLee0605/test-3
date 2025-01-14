"use client";

import React, { useState, useEffect } from "react";
import CustomBtn from "../CustomBtn";
import Image from "next/image";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      id: 1,
      title: "Up to 300%",
      desc: "Boost balance: <br/>€60 FreeBet <br class='lg:block hidden'/>for 3 deposits. ",
      btn: "GET NOW",
      img: "/image/main-banner-01.png",
      bg: "bg-banner-01",
    },
    {
      id: 2,
      title: "Exclusive Tournament",
      desc: "Piggy Christmas Tap: <br/>€35,000 For Your <br class='lg:block hidden'/>Wins",
      btn: "JOIN AND WIN",
      img: "/image/main-banner-02.png",
      bg: "bg-banner-02",
    },
    {
      id: 3,
      title: "CashBack",
      desc: "Win or Get Back up <br/>to €100",
      btn: "DISCOVER MORE",
      img: "/image/main-banner-03.png",
      bg: "bg-banner-03",
      note: "See your best cashback offers for Slots, Live Games, and Crash <br class='lg:block hidden'/>Games. Play and get your money back daily!",
    },
  ];

  const updateIndex = (newIndex) => {
    setActiveIndex((prevIndex) => (newIndex + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemPosition = (index) => {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    const nextIndex = (activeIndex + 1) % items.length;
    if (index === activeIndex) return "z-10 order-2";
    if (index === prevIndex) return "z-0 order-1";
    if (index === nextIndex) return "z-0 order-3";
    return "hidden";
  };

  return (
    <div className="xl:py-8 lg:py-6 md:py-6 py-12">
      <div className="flex justify-center w-full items-center relative">
        <div className="flex justify-center items-center w-full relative transition-transform duration-500 gap-10">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`relative flex items-center justify-center transition-all duration-500 ${getItemPosition(
                index
              )} flex-shrink-0 w-full lg:w-[800px] xl:w-[1200px] h-[450px] md:h-[300px] lg:h-[330px] xl:h-[421px]`}
            >
              <div
                className={`${
                  item.bg
                } absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                  index === activeIndex
                    ? "opacity-100 active-banner"
                    : "opacity-20 deactive-banner"
                } rounded-3xl`}
              >
                <div className="flex text-center justify-between items-center  xl:flex-row lg:flex-row md:flex-row flex-col-reverse lg:mt-0 md:mt-0 -mt-32">
                  <div className="flex flex-col gap-6 xl:p-14 lg:8 p-3 flex-1">
                    <div>
                      <p className="text-[12px] lg:text-xl bg-[#FFFFFF1A] py-[6px] px-4 rounded-full">
                        {item.title}
                      </p>
                    </div>
                    <h1
                      className="text-2xl lg:text-3xl xl:text-[42px] xl:leading-[60px] font-medium lg:font-extrabold"
                      dangerouslySetInnerHTML={{
                        __html: item.desc,
                      }}
                    />
                    <CustomBtn
                      bgColor="bg-[#FF0960]"
                      textColor="text-white"
                      borderRadius="rounded-lg"
                      className="text-base lg:text-xl py-[6px] px-10 lg:px-[88px]"
                    >
                      {item.btn}
                    </CustomBtn>
                    {item.note && (
                      <p
                        className="text-xs text-white text-center"
                        dangerouslySetInnerHTML={{
                          __html: item.note,
                        }}
                      />
                    )}
                  </div>
                  <div className="flex flex-1">
                    <Image
                      aria-hidden
                      src={item.img}
                      alt="main-banner"
                      width={585}
                      height={485}
                      className="xl:block lg:block hidden"
                    />
                    <Image
                      aria-hidden
                      src={item.img}
                      alt="main-banner"
                      width={350}
                      height={168}
                      className="xl:hidden lg:hidden block"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-5 right-5">
                <Image
                  aria-hidden
                  src="/image/note.png"
                  alt="note"
                  width={16}
                  height={16}
                  className=""
                />
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden block absolute -bottom-10 flex justify-center items-center w-full gap-3">
          {items.map((item, index) => (
            <button
              key={item.id}
              className={`rounded-full bg-white ${
                activeIndex === index ? "w-3 h-3" : "bg-opacity-50 w-2 h-2"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
