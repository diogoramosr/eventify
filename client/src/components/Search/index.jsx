import React, { useState } from "react";

export default function CompSearch() {
  const [search, setSearch] = useState("");

  function voz() {
    // Verifica se o navegador suporta a API SpeechRecognition
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();

      // Define a configuração da SpeechRecognition
      recognition.continuous = true; // Reconhecimento contínuo, para capturar fala repetidamente
      recognition.interimResults = true; // Resultados intermediários, para atualizar o input conforme a pessoa fala

      // Função chamada quando a fala é capturada
      recognition.onresult = (event) => {
        const lastResultIndex = event.results.length - 1;
        const transcript = event.results[lastResultIndex][0].transcript;

        // Insere o texto capturado no input
        setSearch(transcript);
      };

      // Função chamada quando ocorre um erro na captura de fala
      recognition.onerror = (event) => {
        console.error("Erro na captura de fala:", event.error);
      };

      // Inicia o reconhecimento de fala quando o botão é clicado
      recognition.start();
    } else {
      console.error("O navegador não suporta a API SpeechRecognition.");
    }
  }
  return (
    <div>
      <form class="flex items-center">
        <label for="voice-search" class="sr-only">
          Pesquisar
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-black focus:border-black block w-full pl-10 p-2.5"
            placeholder="Pesquisar eventos, autores, etc."
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => voz()}
            type="button"
            class="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-black hover:text-blue-900"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <button
          type="submit"
          class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-purple-800 rounded-lg border border-purple-700 focus:outline-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 mr-2 -ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          Buscar
        </button>
      </form>
    </div>
  );
}
