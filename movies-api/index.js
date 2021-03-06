import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import bodyParser from 'body-parser';
import './db';
import usersRouter from './api/users';
import session from 'express-session';
import passport from './authenticate';
import {loadUsers, loadMovies, loadUpcoming, loadTopRated, loadNowPlaying} from './seedData';

dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();

if (process.env.SEED_DB) {
  loadUsers();
  loadUpcoming();
  loadTopRated();
  loadNowPlaying();
  loadMovies();
}

const port = process.env.PORT;

//session middleware
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.use(express.static('public'));
app.use(passport.initialize());
// app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/movies', moviesRouter);
app.use('/api/users', usersRouter);
app.use('/api/genres', moviesRouter);
app.use('/api/upcoming', moviesRouter);
app.use('api/favorites', usersRouter);
app.use('/api/toprated', moviesRouter);
app.use('/api/nowplaying', moviesRouter);

app.use(errHandler);


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});