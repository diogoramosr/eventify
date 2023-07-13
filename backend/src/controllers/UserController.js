import User from "../models/User.js";
import Yup from "yup";

class UserController {
  async index(req, res) {
    try {
      const user = await User.find();

      if (user.length === 0) {
        return res.status(404).json({ message: "Users not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const { username, email, password, phone, cpf, cnpj, typePerson } =
        req.body;

      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
        phone: Yup.string().required().max(15),
        cpf: Yup.string().max(14),
        cnpj: Yup.string().max(18),
        typePerson: Yup.string().required(),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: "Validation Failure" });
      }

      // REGEX CPF
      const regexCPF = new RegExp(
        "^[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}\\-[0-9]{2}$",
        "g"
      );

      // REGEX CNPJ
      const regexCNPJ = new RegExp(
        "^[0-9]{2}\\.[0-9]{3}\\.[0-9]{3}\\/[0-9]{4}\\-[0-9]{2}$",
        "g"
      );

      // REGEX TELEPHONE - (xx) xxxx-xxxx
      const regexPhone = new RegExp(
        "^\\([0-9]{2}\\) [0-9]{5}\\-[0-9]{4}$",
        "g"
      );

      if (typePerson === "pessoa_fisica") {
        if (!regexCPF.test(cpf)) {
          return res.status(400).json({ error: "CPF is required" });
        }
      } else if (typePerson === "pessoa_juridica") {
        if (!regexCNPJ.test(cnpj)) {
          return res.status(400).json({ error: "CNPJ is required" });
        }
      } else {
        return res.status(400).json({ error: "Type Person is required" });
      }

      if (!regexPhone.test(phone)) {
        return res.status(400).json({ error: "Phone is required" });
      }

      if (!username || !email || !password || !phone) {
        return res.status(400).json({ error: "Required fields are missing" });
      }

      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ error: "User already exists" });
      }

      const newUser = await User.create({
        username,
        email,
        password,
        phone,
        cpf,
        cnpj,
        typePerson,
      });

      return res.status(201).json(newUser);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const user = req.user;
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async details(req, res) {
    try {
      const userId = req.userId;

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json({
        _id: user.id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new UserController();
