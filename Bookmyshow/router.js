import { Router } from "express";
import multer from "multer";
import * as rh from "./requesthandlers.js"

import path from "path";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});



const upload = multer({ storage: storage });
 

const router = Router()



router.route("/upload").post(upload.single("file"),rh.uploadFilm)


router.route("/movies").get(rh.getMovies)











export default router;
