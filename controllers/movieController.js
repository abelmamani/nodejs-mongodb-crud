import Movie from '../models/Movie.js';

const movieController = {
    getMovies: async (req, res) => {
        try{
            const movies = await Movie.find();
            return res.status(200).json(movies);
        }catch(err){
            return res.status(500).json({message: err.message});
        }

    },
    getMovieById: async (req, res) => {
        try{
            const {id} = req.params;
            
            const movie = await Movie.findById(id);
            if(!movie){
                return res.status(404).json({message: 'Movie Not found'});
            }
            
            return res.status(200).json(movie);
        }catch(err){
            return res.status(500).json({message: err.message});
        }
    },
    createMovie: async (req, res) => {
        try{
            const newMovie = req.body;
            
            const movie = new Movie(newMovie);
            await movie.save();
            
            return res.status(201).json(movie);
        }catch(err){
            return res.status(400).json({message: err.message});
        }
    },
    updateMovie: async (req, res) => {
        try{
            const {id} = req.params;
            const newMovie = req.body;

            const movie = await Movie.findByIdAndUpdate(id, newMovie, {
                new: true
            });
            if(!movie){
                return res.status(404).json({message: 'MOvie not found'});
            }

            return res.status(200).json(movie);
        }catch(err){
            return res.status(400).json({message: err.message});
        }
    },
    deleteMovie: async (req, res) => {
        try{
            const {id} = req.params;

            const movie = await Movie.findByIdAndDelete(id);
            if(!movie){
                return res.status(404).json({message: 'Movie not found'});
            }
            
            return res.status(200).json({message: 'Movie deleted'});
        }catch(err){
            return res.status(500).json({message: err.message});
        }
    },
}

export default movieController;