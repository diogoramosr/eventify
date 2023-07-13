import React from "react";

const data = [
  { id: 1, label: "Termos de uso", href: "/terms" },
  { id: 2, label: "Privacidade", href: "/privacy" },
  { id: 3, label: "Ajuda", href: "/help" },
  { id: 4, label: "Preferências de cookies", href: "/cookies" },
  { id: 5, label: "Anuncie", href: "/ad" },
  { id: 6, label: "Sobre", href: "/about" },
];
export default function CompInfinityFooter() {
  return (
    <>
      <section>
        <div className="bg-white fixed bottom-0 w-full left-0 right-0 z-50 border-t-[1px] border-gray-200 py-2">
          <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 items-center">
            <ul className="flex items-center justify-around">
              {data.map((item) => (
                <li
                  key={item.id}
                  className="text-gray-500 text-[13px] font-bold"
                >
                  <a
                    href={item.href}
                    className="hover:text-black duration-200 ease-in-out"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-end">
              <p className="font-bold italic">Eventify</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
