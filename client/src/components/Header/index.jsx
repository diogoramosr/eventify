import React, { useState, useEffect } from "react";

import CompSpeedDial from "../SpeedDial";

export default function CompHeader() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY < 100;
      setIsTop(top);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 right-0 inset-x-0 z-[999] duration-200 ease-in-out py-2 px-4 lg:px-8 lg:py-4 ${
          isTop ? "bg-transparent" : "bg-black"
        } `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="font-medium text-white">
              {isTop ? <p className="text-2xl">Eventify</p> : <p>Eventify</p>}
            </a>
          </div>
          <div>
            <a href="/event" className="font-medium text-md text-white">
              {isTop ? (
                <p className="tracking-widest hover:bg-black/70 px-4 py-1 rounded-sm duration-200 ease-linear">
                  Eventos
                </p>
              ) : (
                <p className="tracking-widest hover:bg-white/40 px-4 py-1 rounded-sm duration-200 ease-linear">
                  Eventos
                </p>
              )}
            </a>
          </div>
        </div>
      </header>
      <CompSpeedDial />
    </div>
  );
}
