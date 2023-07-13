import Event from "../models/Event.js";
import User from "../models/User.js";
import mongoose from "mongoose";
import Yup from "yup";

class EventController {
  async index(req, res) {
    try {
      const event = await Event.find();

      if (event.length === 0) {
        return res.status(404).json({ message: "Events not found" });
      }

      return res.status(200).json(event);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const { event_id } = req.params;

      const event = await Event.findById(event_id);

      if (!mongoose.Types.ObjectId.isValid(event_id)) {
        return res.status(400).json({ error: "Invalid id" });
      }

      if (!event) {
        return res.status(404).json({ error: "Event not found" });
      }

      if (event.length === 0) {
        return res
          .status(404)
          .json({ message: "There are no registered events" });
      }

      return res.status(200).json(event);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const banners = req.files.map((file) => file.filename);
      const { title, description, date, location, price, category } = req.body;

      if (!title || !description || !date || !location || !price || !category) {
        return res
          .status(400)
          .send({ message: "Complete all the fields correctly" });
      }

      if (!req.files) {
        return res
          .status(400)
          .json({ message: "You must send at least one image" });
      }

      // REGEX PARA VALIDAR DATA EM FORMATO DD/MM/YYYY
      const regexDate = new RegExp(
        "^(0[1-9]|[12][0-9]|3[01])[/.-](0[1-9]|1[012])[/.-](19|20)\\d\\d$"
      );

      if (!regexDate.test(date)) {
        return res
          .status(400)
          .json({ message: "Date must be in format DD/MM/YYYY" });
      }

      // REGEX PARA VALIDAR PREÇO EM FORMATO 0.00
      const regexPrice = new RegExp("^[0-9]+([,.][0-9]+)?$");

      if (!regexPrice.test(price)) {
        return res
          .status(400)
          .json({ message: "Price must be in format 0.00" });
      }

      // VALIDAR SOMENTE 5 CATEGORIAS
      const categories = ["Free", "Paid", "Family", "Children", "Adult"];

      if (!categories.includes(category)) {
        return res.status(400).json({
          message:
            "Category must be one of the following: Free, Paid, Family, Children, Adult",
        });
      }

      // REGEX PARA VALIDAR LOCALIZAÇÃO EM FORMATO "RUA, NÚMERO, BAIRRO, CIDADE, ESTADO"
      // EXEMPLO: "Rua 1, 123, Bairro 1, Cidade 1, Estado 1"
      const regexLocation = new RegExp(
        "^[a-zA-Z0-9]+([,][ ]?[a-zA-Z0-9]+)+([,][ ]?[a-zA-Z0-9]+)+([,][ ]?[a-zA-Z0-9]+)+([,][ ]?[a-zA-Z0-9]+)$",
        "g"
      );

      // if (!regexLocation.test(location)) {
      //   return res.status(400).json({
      //     message:
      //       "Location must be in format 'Street, Number, Neighborhood, City, State'",
      //   });
      // }

      // // REGEX PARA SATISFAÇÃO EM FORMATO 0.0
      // const regexSatisfaction = new RegExp("^[0-9]+([,.][0-9]+)?$");
      // if (!regexSatisfaction.test(satisfaction)) {
      //   return res
      //     .status(400)
      //     .json({ message: "Satisfaction must be in format 0.0" });
      // }

      const event = await Event.create({
        title,
        organizer: req.userId,
        description,
        date,
        location,
        price,
        category,
        banner: banners,
        satisfaction: 0.0,
      });

      const eventsUrls = event.toObject();
      eventsUrls.banner_url = event.banner_url;
      event.banner_url = event.banner_url;

      return res.status(200).json(eventsUrls);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new EventController();
