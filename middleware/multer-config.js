const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/bmp": "bmp",
  "image/gif": "gif",
  "image/x-icon": "ico",
  "image/svg+xml": "svg",
  "image/tiff": "tif",
  "image/tif": "tif",
  "image/webp": "webp",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    if (
      req.body.sauce &&
      (file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/bmp" ||
        file.mimetype === "image/gif" ||
        file.mimetype === "image/ico" ||
        file.mimetype === "image/svg" ||
        file.mimetype === "image/tiff" ||
        file.mimetype === "image/tif" ||
        file.mimetype === "image/webp")
    ) {
      callback(null, name + Date.now() + "." + extension);
    } else {
      callback(new Error("🚀 ~ Fichier non pris en charge."));
    }
  },
});
module.exports = multer({ storage: storage }).single("image");
