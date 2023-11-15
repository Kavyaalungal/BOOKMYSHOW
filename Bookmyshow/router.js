import { Router } from "express";
import multer from "multer";
import * as rh from "./requesthandlers.js"

import path from "path";

const storage = multer.diskStorage({
    destination:"./files",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});


const upload = multer({ storage: storage });
 

const router = Router()
router.route("/upload").post(rh.uploadData)

router.route("/file").post(upload.array("myfile",4),(req,res)=>{

    console.log(req.files);
    res.json("files stored");
})


router.route("/get-file/:file").get((req,res)=>{
    let fileName = req.params;
    res.sendFile(path.resolve(`./files/${fileName.file}`))
})

export default router;