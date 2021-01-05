import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Movies, Profile, HomePage, Favorites, Upcoming } from "./pages/pages";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import PrivateRoute from "./components/privateRoute";
import AuthHeader from "./components/authHeader.js";
import AuthProvider from "./contexts/authContext";
import MovieProvider from "./contexts/moviesContext";


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
        </ul>
        <MovieProvider>
        <Switch>
          <Route path="/public" component={PublicPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/movies" component={Movies} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/favorites" component={Favorites} />
          <PrivateRoute path="/upcoming" component={Upcoming} />
          <Redirect from="*" to="/" />
        </Switch>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
