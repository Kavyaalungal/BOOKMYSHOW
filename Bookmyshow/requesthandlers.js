import movieSchema from "./schema/movie.schema.js";



   export async function uploadFilm(req,res){
    try {
        let { title } = req.body;
        let filename = req.file.filename;
        const newFilm = new Film({ title, filename });
        await newFilm.save();
        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false });
    }

}


export async function getMovies(req,res){
    try {
        const movies = await Film.find({}, { _id: 0, __v: 0 });
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false });
    }

}
