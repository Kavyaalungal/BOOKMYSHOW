 import movieSchema from "./schema/movie.schema.js";

// import fileSchema from "./schema/file.schema.js";

//    export async function uploadFilm(req,res){
//     try {
//         let { title } = req.body;
//         let filename = req.file.filename;
//         const newFilm = new Film({ title, filename });
//         await newFilm.save();
//         res.json({ success: true });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false });
//     }

// }


// export async function getMovies(req,res){
//     try {
//         const movies = await Film.find({}, { _id: 0, __v: 0 });
//         res.json(movies);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false });
//     }

// }

export async function uploadFile(req,res){
    try {
        let {title, file}=req.body;
        console.log(title,file);
        let result=await movieSchema.create({
            title,
            file
        });
        if(result){
            return res.json("file uploaded")
        }
        return res.status(400).send("file could not be uploaded")
      
        
    } catch (error) {
        console.log(error)
        return res.status(500).send("error")
    }
}
export async function getfile(req,res){
    try {
       
        let data=await movieSchema.find();
        return res.json(data);
        
        
    } catch (error) {
        console.log(error)
        return res.status(500).send("error")
    }
}