import multer from "multer";
import path, { dirname } from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, resp, callBack) => {
      const extesion = path.extname(resp.originalname);
      const name = path.basename(resp.originalname, extesion);

      callBack(null, `${name}-${Date.now()}${extesion}`);
    },
  }),
};
