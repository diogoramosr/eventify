import React, { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import { AuthContext } from "../../contexts/auth";
import { Table } from "flowbite-react";

import CompInfinityFooter from "../../components/InfinityFooter";
import CompSpeedDial from "../../components/SpeedDial";
import CompSearch from "../../components/Search";

const head = [
  {
    id: 0,
    name: "Banner",
  },
  {
    id: 1,
    name: "Nome",
  },
  {
    id: 2,
    name: "Categoria",
  },
  {
    id: 3,
    name: "Dono",
  },
  {
    id: 4,
    name: "Descrição",
  },
  {
    id: 5,
    name: "Preço",
  },
];

export default function PageUserEvents() {
  const { user } = useContext(AuthContext);
  const [username, setUsername] = useState(user.username);
  const [eventList, setEventList] = useState([]);

  // CAMPOS PARA O FORMULARIO DE CADASTRO DE EVENTOS
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    price: "",
    category: "",
    banner: "",
  });

  useEffect(() => {
    // funcao para carregar os eventos somente do usuario logado
    async function loadEvents() {
      const response = await api.get("/events");
      const events = response.data.filter(
        (event) => event.organizer === user._id
      );
      setEventList(events);
    }
    loadEvents();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  // funcao para cadastrar um novo evento
  async function handleSubmit() {
    try {
      const { title, description, date, location, price, category, banner } =
        formValues;

      if (
        !title ||
        !description ||
        !date ||
        !location ||
        !price ||
        !category ||
        !banner
      ) {
        return alert("Preencha todos os campos");
      }

      const infosForm = {
        title,
        description,
        date,
        location,
        price,
        category,
        banner,
      };

      const response = await api.post("/events", { ...infosForm });
      const newEvent = response.data;
      setEventList([...eventList, newEvent]);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(formValues);

  return (
    <>
      <CompSpeedDial />

      <section>
        <div className="max-w-[1240px] mx-auto mt-10 mb-10">
          <div className="p-1 gap-2 grid grid-cols-2 items-center">
            <CompSearch />
            <div className="bg-red-900">
              <button
                className="btn"
                onClick={() => window.my_modal_3.showModal()}
              >
                open modal
              </button>
              <dialog id="my_modal_3" className="modal">
                <form
                  method="dialog"
                  className="modal-box"
                  onSubmit={handleSubmit}
                >
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <h3 className="font-bold text-lg mb-2">
                    Adicionar um novo evento
                  </h3>
                  <hr />
                  <div className="flex flex-col items-center justify-between mt-4 space-y-6">
                    <div className="w-full grid grid-cols-2 gap-x-2">
                      <div>
                        <label
                          className="form-label w-full text-lg font-medium"
                          htmlFor="title"
                        >
                          Título
                        </label>
                        <input
                          className="form-input w-full rounded-md focus:ring-0 focus:outline-none focus:border-black"
                          type="text"
                          name="title"
                          id="title"
                          required
                          value={formValues.title}
                          onChange={handleChange}
                          placeholder="Digite o título do evento"
                        />
                      </div>
                      <div>
                        <label
                          className="form-label w-full text-lg font-medium"
                          htmlFor="category"
                        >
                          Categoria
                        </label>
                        <select
                          className="w-full form-select rounded-md focus:ring-0 focus:outline-none focus:border-black"
                          placeholder="Selecione uma categoria"
                          type="text"
                          name="category"
                          id="category"
                          required
                          value={formValues.category}
                          onChange={handleChange}
                        >
                          <option value="Free">Grátis</option>
                          <option value="Paid">Pago</option>
                          <option value="Family">Familia</option>
                          <option value="Children">Infantil</option>
                          <option value="Adult">Adulto (+18)</option>
                        </select>
                      </div>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-x-2">
                      <div>
                        <label
                          className="form-label w-full text-lg font-medium"
                          htmlFor="price"
                        >
                          Preço
                        </label>
                        <input
                          className="form-input w-full rounded-md focus:ring-0 focus:outline-none focus:border-black"
                          type="number"
                          name="price"
                          id="price"
                          placeholder="R$ 0,00"
                          required
                          value={formValues.price}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label
                          className="form-label w-full text-lg font-medium"
                          htmlFor="date"
                        >
                          Data
                        </label>
                        <input
                          className="form-input w-full rounded-md focus:ring-0 focus:outline-none focus:border-black"
                          type="date"
                          name="date"
                          id="date"
                          placeholder="Digite a data do evento"
                          required
                          value={formValues.date}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="w-full">
                      <label
                        className="form-label w-full text-lg font-medium"
                        htmlFor="location"
                      >
                        Local
                      </label>
                      <input
                        className="form-input w-full rounded-md focus:ring-0 focus:outline-none focus:border-black"
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Ex: Rua, número, bairro, cidade, estado"
                        required
                        value={formValues.location}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="w-full">
                      <label
                        className="form-label w-full text-lg font-medium"
                        htmlFor="description"
                      >
                        Descrição
                      </label>
                      <textarea
                        className="form-input w-full rounded-md focus:ring-0 focus:outline-none focus:border-black"
                        type="text"
                        name="description"
                        id="description"
                        required
                        cols="30"
                        rows="3"
                        placeholder="Digite a descrição do evento"
                        value={formValues.description}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="w-full">
                      <label
                        className="form-label w-full text-lg font-medium"
                        htmlFor="banner"
                      >
                        Banner
                      </label>
                      <input
                        className="form-input w-full rounded-md focus:ring-0 focus:outline-none focus:border-black"
                        type="file"
                        name="banner"
                        id="banner"
                        required
                        value={formValues.banner}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-10">
                    <button
                      className="bg-red-900 text-white font-bold py-2 px-4 rounded-md"
                      type="reset"
                    >
                      Limpar
                    </button>
                    <button
                      className="bg-purple-900 text-white font-bold py-2 px-4 rounded-md"
                      type="submit"
                    >
                      Salvar
                    </button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </section>

      <Table hoverable>
        <Table.Head>
          {head.map((item) => (
            <Table.HeadCell key={item.id}>{item.name}</Table.HeadCell>
          ))}
        </Table.Head>

        <Table.Body className="divide-y">
          {eventList.map((event) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                <img
                  src={event.banner_url[0]}
                  alt={event.title}
                  className="
                    w-32 h-32
                    object-cover
                    rounded-md
                    shadow-md
                  "
                />
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white truncate">
                {event.title}
              </Table.Cell>
              <Table.Cell>{event.category}</Table.Cell>

              <Table.Cell>{username}</Table.Cell>

              <Table.Cell className="truncate">{event.description}</Table.Cell>
              <Table.Cell>{event.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <CompInfinityFooter />
    </>
  );
}
