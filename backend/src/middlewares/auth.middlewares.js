import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: "Token not found" });
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.status(401).json({ error: "Token error" });
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.status(401).json({ error: "Token malformatted" });
    }

    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        return res.status(401).json({ error: "Token invalid" });
      }

      const user = await User.findById(decoded.id);

      if (!user || !user.id) {
        return res.status(401).json({ error: "User not found" });
      }

      req.userId = user.id;
      return next();
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
