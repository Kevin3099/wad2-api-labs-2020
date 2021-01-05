import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies, getUpcoming } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result, upcoming: [...state.upcoming]};
    case "load-upcoming":
      return {upcoming: action.payload.upcoming, movies: [...state.movies]};
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  useEffect(() => {
    getUpcoming().then(upcoming => {
      console.log(upcoming);
      dispatch({ type: "load-upcoming", payload: {upcoming}});
    });
  },[]);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider