import express from 'express';
import movieModel from './movieModel';
import {
  getMovies, getMovie, getMovieReviews, getGenres, getUpcoming, getTopRatedMovies, getNowPlayingMovies
} from '../tmdb-api';

const router = express.Router();

router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/genres', (req, res,next) => {
  getGenres()
  .then(genres => res.status(200).send(genres))
  .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

router.get('/upcoming', (req, res,next) => {
  getUpcoming()
  .then(upcoming => res.status(200).send(upcoming))
  .catch((error) => next(error));
});
router.get('/nowPlaying', (req, res,next) => {
  getNowPlayingMovies()
  .then(nowPlaying => res.status(200).send(nowPlaying))
  .catch((error) => next(error));
});
router.get('/topRated', (req, res,next) => {
  getTopRatedMovies()
  .then(topRated => res.status(200).send(topRated))
  .catch((error) => next(error));
});

export default router;