import Yup from "yup";
import bcrypt from "bcrypt";

import { loginService, generateToken } from "../services/auth.js";

class AuthController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: "Validation Failure" });
      }

      const user = await loginService(email);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return res.status(401).json({ error: "Invalid Password" });
      }

      const token = generateToken(user._id);
      return res
        .status(200)
        .json({ id: user.id, username: user.username, token: token });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new AuthController();
