import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Carousel,
  IconButton,
} from "@material-tailwind/react";

import CompTodayCard from "../Card";

const info = [
  {
    _id: 1,
    title: "UI/UX Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    image: "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
    date: new Date().toLocaleDateString(),
  },
  {
    _id: 2,
    title: "UI/UX Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bbe644143468085.627b296509c1a.png",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
    date: new Date().toLocaleDateString(),
  },
  {
    _id: 3,
    title: "UI/UX Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bbe644143468085.627b296509c1a.png",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
    date: new Date().toLocaleDateString(),
  },
  {
    _id: 4,
    title: "UI/UX Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bbe644143468085.627b296509c1a.png",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
    date: (new Date().getDate() + 7).toLocaleString(),
  },
  {
    _id: 5,
    title: "UI/UX Review Check",
    description:
      "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bbe644143468085.627b296509c1a.png",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
    date: (new Date().getDate() + 7).toLocaleString(),
  },
];

export default function CompFreeCard() {
  const data = [
    {
      label: "Hoje",
      value: "today",
    },
    {
      label: "Nesta semana",
      value: "week",
    },
  ];

  const filterToday = () => {
    return info.filter(({ date }) => date === new Date().toLocaleDateString());
  };

  const filterWeek = (value) => {
    return info.filter(
      ({ date }) => date === (new Date().getDate() + 7).toLocaleString()
    );
  };

  return (
    <Tabs value="today">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        <TabPanel value="today">
          <Carousel
            className="rounded-xl h-[35rem]"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 -translate-y-2/4 left-1"
              >
                <svg
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-black w-8"
                >
                  <path
                    d="m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-8.211-4.843c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591z"
                    fill-rule="nonzero"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 -translate-y-2/4 right-1"
              >
                <svg
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-black w-8 "
                >
                  <path
                    d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z"
                    fill-rule="nonzero"
                  />
                </svg>
              </IconButton>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "bg-gray-300 w-8" : "bg-black w-4"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {filterToday().map((item) => (
              <>
                <div key={item._id} className="p-10 h-full">
                  <CompTodayCard {...item} />
                </div>
              </>
            ))}
          </Carousel>
        </TabPanel>
        <TabPanel value="week">
          <Carousel
            className="rounded-xl h-[35rem]"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 -translate-y-2/4 left-1"
              >
                <svg
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-black w-8"
                >
                  <path
                    d="m22 12.002c0-5.517-4.48-9.997-9.998-9.997-5.517 0-9.997 4.48-9.997 9.997 0 5.518 4.48 9.998 9.997 9.998 5.518 0 9.998-4.48 9.998-9.998zm-8.211-4.843c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591z"
                    fill-rule="nonzero"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 -translate-y-2/4 right-1"
              >
                <svg
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-black w-8 "
                >
                  <path
                    d="m2.009 12.002c0-5.517 4.48-9.997 9.998-9.997s9.998 4.48 9.998 9.997c0 5.518-4.48 9.998-9.998 9.998s-9.998-4.48-9.998-9.998zm8.211-4.843c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591z"
                    fill-rule="nonzero"
                  />
                </svg>
              </IconButton>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "bg-gray-300 w-8" : "bg-black w-4"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {filterWeek().map((item) => (
              <>
                <div key={item._id} className="p-10 h-full">
                  <CompTodayCard {...item} />
                </div>
              </>
            ))}
          </Carousel>
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
