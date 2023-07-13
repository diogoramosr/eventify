import React, { useEffect, useState } from "react";
import api from "../../services/api";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Carousel,
  IconButton,
} from "@material-tailwind/react";

// const info = [
//   {
//     _id: 1,
//     title: "UI/UX Review Check",
//     description:
//       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
//     image: "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg",
//     avatar:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
//     date: new Date().toLocaleDateString(),
//     categories: "Adulto",
//   },
//   {
//     _id: 2,
//     title: "UI/UX Review Check",
//     description:
//       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
//     image:
//       "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bbe644143468085.627b296509c1a.png",
//     avatar:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
//     date: new Date().toLocaleDateString(),
//     categories: "Grátis",
//   },
//   {
//     _id: 3,
//     title: "UI/UX Review Check",
//     description:
//       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
//     image:
//       "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bbe644143468085.627b296509c1a.png",
//     avatar:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
//     date: new Date().toLocaleDateString(),
//     categories: "Grátis",
//   },
//   {
//     _id: 4,
//     title: "UI/UX Review Check",
//     description:
//       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
//     image:
//       "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bbe644143468085.627b296509c1a.png",
//     avatar:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
//     date: (new Date().getDate() + 7).toLocaleString(),
//     categories: "Pagos",
//   },
//   {
//     _id: 5,
//     title: "UI/UX Review Check",
//     description:
//       "Because it's about motivating the doers. Because I'm here to follow my dreams and inspire others.",
//     image:
//       "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bbe644143468085.627b296509c1a.png",
//     avatar:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
//     date: (new Date().getDate() + 7).toLocaleString(),
//     categories: "Pagos",
//   },
// ];

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

const categories = [
  {
    id: 1,
    name: "All",
    label: "All",
  },
  {
    id: 2,
    name: "Free",
    label: "Grátis",
  },
  {
    id: 3,
    name: "Paid",
    label: "Pagos",
  },
  {
    id: 4,
    name: "Family",
    label: "Família",
  },
  {
    id: 5,
    name: "Children",
    label: "Infantil",
  },
  {
    id: 6,
    name: "Adult",
    label: "Adulto",
  },
];

import CompEventsCard from "../EventsCard";

export default function CompFilterCategories() {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get("/events");
      setEventList(response.data);
    }
    loadEvents();
  }, []);

  function filterCategory(category) {
    return eventList.filter((item) => item.category === category);
  }

  return (
    <Tabs value="All">
      <TabsHeader>
        {categories.map(({ id, label, name }) => (
          <Tab key={id} value={name}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {categories.map(({ id, name }) => (
          <TabPanel key={id} value={name}>
            <div className="w-full grid lg:grid-cols-2 items-center justify-items-center gap-x-2 mt-5">
              {filterCategory(name).map((item) => (
                <div key={item._id}>
                  <CompEventsCard {...item} />
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
