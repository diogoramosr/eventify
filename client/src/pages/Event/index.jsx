import React from "react";

import CompHeader from "../../components/Header";
import CompInfinityFooter from "../../components/InfinityFooter";
import CompFilterCategories from "../../components/FilterCategories";
import CompSearch from "../../components/Search";

export default function PageEvent() {
  return (
    <div>
      <CompHeader />
      <section>
        <div className="bg-black h-[4rem] w-full"></div>
      </section>

      <section>
        <div className="max-w-[1240px] mx-auto mt-12">
          <div className="p-1 gap-2 grid grid-cols-2 items-center">
            <div></div>
            <CompSearch />
          </div>
        </div>
      </section>

      <hr className="mt-8 w-full" />

      <section>
        <div className="max-w-[1240px] mx-auto mt-6 py-2 px-2">
          <div>
            <CompFilterCategories />
          </div>
        </div>
      </section>

      <CompInfinityFooter />
    </div>
  );
}
