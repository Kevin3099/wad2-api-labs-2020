import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage';
import FavoriteMoviesPage from './pages/favoritesMoviesPage';
import UpcomingMoviesPage from './pages/UpcomingMoviesPage';
import MoviesNowPlaying from './pages/nowPlayingPage';
import TopRatedMovies from './pages/topRatedMoviesPage';
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./components/privateRoute";
import AuthHeader from "./components/authHeader.js";
import AuthProvider from "./contexts/authContext";

const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
    <div className="jumbotron">
    <SiteHeader />      {/* New Header  */}
    <AuthHeader />
      <div className="container-fluid">
       <MoviesContextProvider>
       {/* <GenresContextProvider> */}
        <Switch>
          <Route exact path="/reviews/form" component={AddMovieReviewPage} />
          <Route path="/reviews/:id/" component={MovieReviewPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
          <PrivateRoute exact path="/movies/upcoming" component={UpcomingMoviesPage} />
          <PrivateRoute exact path="/movies/toprated" component={TopRatedMovies} />
          <PrivateRoute exact path="/movies/nowplaying" component={MoviesNowPlaying} />
          <PrivateRoute path="/movies/:id" component={MoviePage} />
          <PrivateRoute path="/" component={HomePage} />
          <Redirect from="*" to="/" />
        </Switch>
        {/* </GenresContextProvider> */}
        </MoviesContextProvider>
      </div>
    </div>
    </AuthProvider>
  </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));