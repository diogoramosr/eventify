import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

import ImgVenha from "../../assets/imgVenha.png";
import ImgFriend from "../../assets/imgFriend.png";
import ImgFire from "../../assets/imgFire.png";
import ImgJunte from "../../assets/imgJunte.png";
import ImgNew from "../../assets/imgNew.png";

import CompHeader from "../../components/Header";
import CompTabs from "../../components/Tabs";
import CompEmphasisCard from "../../components/EmphasisCard";
import CompFreeCard from "../../components/FreeCard";
import CompFooter from "../../components/Footer";

const eventos = [
  {
    _id: 1,
    title: "Evento 1",
    description: "Descrição do evento 1",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/44432e162302481.63d3491d6c1b7.png",
  },
  {
    _id: 2,
    title: "Evento 2",
    description: "Descrição do evento 2",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2b515127963105.5636d7b55bc8c.jpg",
  },
  {
    _id: 3,
    title: "Evento 3",
    description: "Descrição do evento 3",
    thumbnail:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/44432e162302481.63d3491d6c1b7.png",
  },
];

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function PageHome() {
  return (
    <div>
      <CompHeader />
      <section>
        <div className="lg:h-[120vh] md:h-[95vh] h-[45vh]">
          <div className="h-full w-full">
            <Carousel
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              {eventos.map((evento) => (
                <>
                  <div className="relative h-full w-full">
                    <img
                      src={evento.thumbnail}
                      alt={evento.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end lg:pb-10 md:pb-8 pb-0 bg-black/30">
                      <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 lg:mb-[7rem] md:mb-[4rem] mb-[3rem]">
                        <Typography
                          variant="h1"
                          color="white"
                          className="mb-4 text-xl md:text-4xl lg:text-5xl"
                        >
                          {evento.title}
                        </Typography>
                        <Typography
                          variant="lead"
                          color="white"
                          className="lg:mb-12 md:mb-12 mb-1 opacity-80"
                        >
                          {evento.description}
                        </Typography>
                        <div className="flex gap-2">
                          <a href={`/event/${evento._id}`}>
                            <Button
                              className="lg:w-36 md:w-36 sm:w-28 p-4"
                              color="white"
                            >
                              <p className="lg:text-[15px] md:text-[15px] text-[10px] text-black">
                                Saiba mais
                              </p>
                            </Button>
                          </a>
                          <a href="/event">
                            <Button
                              className="lg:w-36 md:w-36 sm:w-28 p-4"
                              color="white"
                              variant="outlined"
                            >
                              <p className="lg:text-[15px] md:text-[15px] text-[10px]   ">
                                Explore
                              </p>
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-[7rem] max-w-[1240px] mx-auto p-1">
          <div class="container px-6 py-16 mx-auto">
            <div class="items-center lg:flex">
              <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg">
                  <h3 class="text-3xl font-semibold dark:text-white lg:text-4xl">
                    Procurando por uma nova experiência?
                  </h3>
                  <p class="mt-3">
                    Chega mais, temos o que você precisa. Venha conhecer os
                    diversos eventos que temos para você.
                  </p>
                  <p className="mt-3">
                    Aqui na Eventify você nunca vai ficar sem opções de eventos
                    para participar. Temos eventos para todos os gostos e
                    públicos.
                  </p>
                  <a href="/event">
                    <button class="w-full px-5 py-2 mt-6 text-sm font-semibold tracking-wider text-white uppercase transition-colors duration-300 transform bg-purple-700 rounded-lg lg:w-auto focus:outline-none hover:bg-purple-700/70">
                      Explore
                    </button>
                  </a>
                </div>
              </div>
              <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img
                  class="w-full h-full lg:max-w-4xl object-cover object-center rounded-md shadow-md lg:h-96"
                  src={ImgVenha}
                  alt="Catalogue-pana.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-[7rem] max-w-[1240px] mx-auto p-1">
          <div className="text-center">
            <h3 class="text-3xl font-semibold lg:text-4xl">
              Eventos em tendência
            </h3>
            <p className="text-lg mb-8">Veja aqui os eventos em tendência.</p>
          </div>
          <CompTabs />
        </div>
      </section>

      <section>
        <div className="container mt-20 max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
              Eventify? O que é isso?
            </h3>
            <p className="max-w-3xl mx-auto text-xl text-center">
              Vem com a gente que te explicamos.
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                O que é o Eventify?
              </h3>
              <p className="mt-3 text-lg dark:text-gray-400">
                O Eventify é uma plataforma de eventos, onde você pode encontrar
                eventos de todos os tipos, desde eventos de tecnologia, até
                eventos de música. Aqui você nunca vai ficar sem opções de
                eventos para participar.
              </p>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Criação de eventos
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Aqui você pode criar seus próprios eventos, e divulgar
                      para que todos possam ver.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Ver meus eventos favoritos? Sim !
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Aqui você pode favoritar eventos, e ver eles quando
                      quiser.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                      Pesquisa de eventos por categoria? Temos !
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Aqui você pode pesquisar eventos por categoria, para
                      facilitar a sua busca.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src={ImgFriend}
                alt=""
                className="mx-auto rounded-lg shadow-md"
              />
            </div>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">
                  Curtiu? Então vem com a gente!
                </h3>
                <p className="mt-3 text-lg dark:text-gray-400">
                  Aqui você pode criar sua conta, e começar a participar de
                  eventos, e criar seus próprios eventos.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Festa privada? Não esquenta !
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Aqui você pode criar eventos privados, e convidar
                        somente quem você quiser.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Precisa de especificações para o evento? Temos !
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Aqui você pode criar eventos com especificações, como
                        por exemplo, evento para maiores de 18 anos.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-50">
                        Impressão de ingressos? Temos !
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Aqui você pode imprimir seus ingressos, e apresentar na
                        entrada do evento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src={ImgFire}
                  alt=""
                  className="mx-auto rounded-lg shadow-md lg:h-96 "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mt-[7rem] max-w-[1240px] mx-auto py-2">
          <div>
            <h2 className="text-center text-4xl mb-3 font-semibold">
              Eventos em destaque
            </h2>
            <p className="text-center text-lg mb-8">
              Veja aqui os eventos em destaque.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center justify-items-center gap-6 p-2">
            <CompEmphasisCard />
          </div>
        </div>
      </section>

      <section>
        <div className="mt-[7rem] max-w-[1240px] mx-auto p-1">
          <div>
            <h2 className="text-center text-4xl mb-3 font-semibold">
              Eventos gratuitos
            </h2>
            <p className="text-center text-lg mb-8">
              Veja aqui os eventos gratuitos acontecendo agora.
            </p>
          </div>
          <CompFreeCard />
        </div>
      </section>

      <section>
        <div className="mt-[2rem] max-w-[1240px] mx-auto p-1">
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Quem comanda o show!
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Seja destaque no mercado, e faça eventos com as empresas mais
                  renomadas do mercado.
                </p>
              </div>
              <ul
                role="list"
                className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="flex items-center gap-x-6">
                      <img
                        className="h-16 w-16 rounded-full"
                        src={person.imageUrl}
                        alt={person.name}
                      />
                      <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight">
                          {person.name}
                        </h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          class="hero lg:min-h-[100vh] md:min-h-[90vh] min-h-[65vh] bg-base-200"
          style={{
            backgroundImage: `url(${ImgJunte})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="hero-overlay bg-opacity-50"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Junte-se hoje</h1>
              <p class="mb-5">
                Faça parte da nossa comunidade e tenha acesso a eventos
                incríveis e exclusivos.
              </p>
              <button class="btn btn-primary">
                <a href="/signin">Junte-se</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 mt-28 bg-gray-200">
        <div className="container  mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
          <div className="flex flex-col justify-center lg:text-left">
            <p className="mb-1 text-sm font-medium tracking-widest uppercase dark:text-violet-400">
              Baixe agora mesmo
            </p>
            <h1 className="py-2 text-3xl font-medium leading-tight title-font">
              Nosso aplicativo está disponível para Android e IOS
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">
            <button className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-7 h-7 text-white"
              >
                <path d="M 5.4160156 2.328125 L 12.935547 10.158203 C 13.132547 10.363203 13.45925 10.363203 13.65625 10.158203 L 15.179688 8.5742188 C 15.405688 8.3392188 15.354312 7.956875 15.070312 7.796875 C 11.137313 5.571875 6.2620156 2.811125 5.4160156 2.328125 z M 3.140625 2.8476562 C 3.055625 3.0456562 3 3.2629063 3 3.5039062 L 3 20.591797 C 3 20.788797 3.044375 20.970625 3.109375 21.140625 L 11.576172 12.324219 C 11.762172 12.131219 11.762172 11.826813 11.576172 11.632812 L 3.140625 2.8476562 z M 17.443359 9.2578125 C 17.335484 9.2729375 17.233297 9.32375 17.154297 9.40625 L 15.015625 11.632812 C 14.829625 11.825812 14.829625 12.130219 15.015625 12.324219 L 17.134766 14.529297 C 17.292766 14.694297 17.546141 14.729188 17.744141 14.617188 C 19.227141 13.777188 20.226563 13.212891 20.226562 13.212891 C 20.725562 12.909891 21.007 12.443547 21 11.935547 C 20.992 11.439547 20.702609 10.981938 20.224609 10.710938 C 20.163609 10.676937 19.187672 10.124359 17.763672 9.3183594 C 17.664172 9.2623594 17.551234 9.2426875 17.443359 9.2578125 z M 13.296875 13.644531 C 13.165875 13.644531 13.034047 13.696328 12.935547 13.798828 L 5.4746094 21.566406 C 6.7566094 20.837406 11.328781 18.249578 15.050781 16.142578 C 15.334781 15.981578 15.386156 15.599281 15.160156 15.363281 L 13.65625 13.798828 C 13.55775 13.696328 13.427875 13.644531 13.296875 13.644531 z"></path>
              </svg>
              <span className="flex flex-col items-start ml-4 leading-none text-white">
                <span className="mb-1 text-xs">GET IT ON</span>
                <span className="font-semibold title-font">Google Play</span>
              </span>
            </button>
            <button className="inline-flex items-center px-5 py-3 rounded-lg bg-purple-500 dark:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="fill-current w-7 h-7 text-white"
              >
                <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
              </svg>
              <span className="flex flex-col items-start ml-4 leading-none text-white">
                <span className="mb-1 text-xs">Download on the</span>
                <span className="font-semibold title-font">App Store</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section class="relative py-20 md:py-24 overflow-hidden">
        <img
          class="absolute top-0 left-0"
          src="saturn-assets/images/newsletter/light-left-top-double.png"
          alt=""
        />
        <div class="relative container px-4 mx-auto">
          <div class="max-w-7xl mx-auto">
            <div class="flex flex-wrap -mx-4 items-center">
              <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <div class="relative z-10 max-w-lg mx-auto">
                  <h4 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                    Assine a nossa newsletter
                  </h4>
                  <div class="md:flex mb-16">
                    <div class="mb-6 md:mb-0 md:mr-8 pt-2 text-gray-600">
                      <svg
                        width="84"
                        height="10"
                        viewbox="0 0 84 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4.5C0.585786 4.5 0.25 4.83579 0.25 5.25C0.25 5.66421 0.585786 6 1 6L1 4.5ZM84 5.25001L76.5 0.919879L76.5 9.58013L84 5.25001ZM1 6L77.25 6.00001L77.25 4.50001L1 4.5L1 6Z"
                          fill="#000"
                        ></path>
                      </svg>
                    </div>
                    <div class="max-w-xs">
                      <p class="text-lg font-semibold text-gray-500">
                        Fique por dentro de tudo o que você precisa saber.
                      </p>
                    </div>
                  </div>
                  <div class="sm:flex items-center">
                    <input
                      class="w-full mb-3 sm:mb-0 sm:mr-4 py-3 px-4 text-sm placeholder-gray-400 border border-gray-300 focus:border-black focus:outline-none focus:ring-black rounded-lg"
                      type="email"
                      placeholder="Seu endereço de e-mail"
                    />
                    <button
                      class="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-white bg-purple-700 rounded-md overflow-hidden"
                      type="submit"
                    >
                      <div class="absolute top-0 right-full w-full h-full bg-purple-500 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                      <div class="relative flex items-center justify-center">
                        <span class="mr-4">Se inscrever</span>
                        <svg
                          width="8"
                          height="11"
                          viewbox="0 0 8 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.82994 5.04001L2.58994 0.80001C2.49698 0.706281 2.38638 0.631887 2.26452 0.581118C2.14266 0.530349 2.01195 0.504211 1.87994 0.504211C1.74793 0.504211 1.61723 0.530349 1.49537 0.581118C1.37351 0.631887 1.26291 0.706281 1.16994 0.80001C0.983692 0.987372 0.87915 1.24082 0.87915 1.50501C0.87915 1.7692 0.983692 2.02265 1.16994 2.21001L4.70994 5.75001L1.16994 9.29001C0.983692 9.47737 0.87915 9.73082 0.87915 9.99501C0.87915 10.2592 0.983692 10.5126 1.16994 10.7C1.26338 10.7927 1.3742 10.866 1.49604 10.9158C1.61787 10.9655 1.74834 10.9908 1.87994 10.99C2.01155 10.9908 2.14201 10.9655 2.26385 10.9158C2.38569 10.866 2.4965 10.7927 2.58994 10.7L6.82994 6.46001C6.92367 6.36705 6.99806 6.25645 7.04883 6.13459C7.0996 6.01273 7.12574 5.88202 7.12574 5.75001C7.12574 5.618 7.0996 5.48729 7.04883 5.36543C6.99806 5.24357 6.92367 5.13297 6.82994 5.04001Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-1/2 px-4">
                <div class="relative pl-20 lg:pl-16 xl:pl-0 max-w-lg mx-auto">
                  <img
                    class="relative block w-full xl:max-w-sm lg:ml-auto lg:h-96 rounded-md shadow-xl object-cover"
                    src={ImgNew}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CompFooter />
    </div>
  );
}
