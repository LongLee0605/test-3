"use client";
import { useState } from "react";
import Image from "next/image";
import CustomButton from "../CustomBtn";

const Footer = () => {
  const footerLinks = [
    {
      title: "Game",
      links: ["Game 1", "Game 2", "Game 3", "Game 4"],
    },
    {
      title: "About",
      links: [
        "About us",
        "Promotions",
        "VIP",
        "Help Center",
        "Awards & Certificates",
        "App",
      ],
    },
    {
      title: "Legal Information",
      links: [
        "General Terms & Conditions",
        "Responsible Gaming Policy",
        "Sports Betting Rules",
        "Privacy and Cookies Policy",
        "Payment Methods",
        "Limits",
      ],
    },
  ];

  // State to control which section is open
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <footer className="bg-[#12294A] px-4">
      <div className="container py-10 lg: after:py-[60px]">
        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <div className="lg:hidden w-full">
            {footerLinks.map((section, index) => (
              <div key={section.title} className="mb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left bg-[#1A3157] hover:bg-[#e2e8f036] px-4 py-2 text-white rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="font-medium">{section.title}</h2>
                    <div
                      className={`transition-transform ${
                        activeAccordion === index ? "rotate-180" : ""
                      }`}
                    >
                      <Image
                        aria-hidden
                        src="/image/down.png"
                        alt={section.title}
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                </button>
                {activeAccordion === index && (
                  <ul className="px-4 py-2 bg-[#1A3157] rounded-lg">
                    {section.links.map((link) => (
                      <li key={link} className="text-[#90A2BD] py-1">
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="lg:flex hidden flex-col ">
              <h2 className="text-2xl font-medium text-white pb-2">
                Help Center
              </h2>
              <p className="text-sm text-[#90A2BD] pb-4 whitespace-nowrap">
                If you have any questions?
              </p>
              <CustomButton
                bgColor="bg-[#3555FF]"
                textColor="text-white"
                borderRadius="rounded-lg"
                className="text-sm px-8 whitespace-nowrap py-3"
              >
                GET ANSWERS
              </CustomButton>
            </div>
            <div className="lg:pt-6 pt-0 flex flex-col gap-6">
              <div>
                <h2 className="lg:hidden block text-center pb-6 font-medium text-white">
                  Follow Us
                </h2>
                <div className="flex items-center gap-4 justify-center">
                  {["tele", "fb", "ig", "tw"].map((icon) => (
                    <div key={icon} className="flex justify-evenly">
                      <Image
                        aria-hidden
                        src={`/image/${icon}.png`}
                        alt="Social icon"
                        width={30}
                        height={30}
                        className="lg:block hidden"
                      />
                      <Image
                        aria-hidden
                        src={`/image/${icon}.png`}
                        alt="Social icon"
                        width={35}
                        height={35}
                        className="lg:hidden block"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex w-full justify-evenly gap-8">
            {footerLinks.map((section, index) => (
              <div key={section.title} className="flex flex-col gap-5">
                <h2 className="font-medium text-white">{section.title}</h2>
                <ul className="flex flex-col gap-5 text-[#90A2BD]">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="hidden lg:flex bg-[#1A3157] hover:bg-[#e2e8f036] cursor-default px-3 py-2 w-[160px] rounded-lg">
              <Image
                aria-hidden
                src="/image/apple.png"
                alt="Globe icon"
                width={42}
                height={42}
              />
              <p className="leading-5 whitespace-nowrap">
                Bluechip App
                <br />
                <span className="text-sm text-[#90A2BD] font-normal">
                  for Mac OS
                </span>
              </p>
            </div>
            <div className="lg:hidden flex bg-[#1A3157] hover:bg-[#e2e8f036] cursor-default rounded-lg">
              <div className="flex justify-between items-center w-full px-6 py-5">
                <div>
                  <h2 className="text-base font-medium text-white">
                    Help Center
                  </h2>
                  <p className="text-sm text-[#90A2BD]">
                    If you have any questions?
                  </p>
                </div>
                <div>
                  <CustomButton
                    bgColor="bg-[#3555FF]"
                    textColor="text-white"
                    borderRadius="rounded-lg"
                    className="text-sm px-3 whitespace-nowrap py-3"
                  >
                    GET ANSWERS
                  </CustomButton>
                </div>
              </div>
            </div>
            <div className="lg:flex hidden gap-2 text-center">
              <div className="flex items-center flex-col bg-[#1A3157] hover:bg-[#e2e8f036] cursor-default w-[76px] px-3 py-2 rounded-lg">
                <Image
                  aria-hidden
                  src="/image/android.png"
                  alt="Globe icon"
                  width={42}
                  height={42}
                />
                <p className="text-[#90A2BD]">Android</p>
              </div>
              <div className="flex items-center flex-col bg-[#1A3157] hover:bg-[#e2e8f036] cursor-default w-[76px] px-3 py-2 rounded-lg">
                <div>
                  <Image
                    aria-hidden
                    src="/image/apple.png"
                    alt="Globe icon"
                    width={42}
                    height={42}
                  />
                </div>
                <p className="text-[#90A2BD]">iOS</p>
              </div>
            </div>
            <div className="lg:hidden flex gap-2 text-center">
              <div className="flex text-left gap-2 items-center bg-[#1A3157] hover:bg-[#e2e8f036] cursor-default flex-1 px-3 py-2 rounded-lg">
                <Image
                  aria-hidden
                  src="/image/android.png"
                  alt="Globe icon"
                  width={42}
                  height={42}
                />
                <p className="leading-5 whitespace-nowrap">
                  Bluechip App
                  <br />
                  <span className="text-sm text-[#90A2BD] font-normal">
                    for Android
                  </span>
                </p>
              </div>
              <div className="flex text-left gap-2 items-center bg-[#1A3157] hover:bg-[#e2e8f036] cursor-default flex-1 px-3 py-2 rounded-lg">
                <Image
                  aria-hidden
                  src="/image/apple.png"
                  alt="Globe icon"
                  width={42}
                  height={42}
                />
                <p className="leading-5 whitespace-nowrap">
                  Bluechip App
                  <br />
                  <span className="text-sm text-[#90A2BD] font-normal">
                    for iOS
                  </span>
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
