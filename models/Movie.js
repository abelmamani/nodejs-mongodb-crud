import { Schema, model } from 'mongoose';

const movieSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    rating: {type: Number, min: 0, max: 10, default: 0},
});

const Movie = model('Movie', movieSchema);

export default Movie;