import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies, getUpcoming, getTopRatedMovies, getNowPlayingMovies, addFavorite, getFavorites } from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], toprated: [...state.toprated], nowplaying: [...state.nowplaying]};
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], toprated: [...state.toprated], nowplaying: [...state.nowplaying]};
    case "load-toprated":
      return { toprated: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming ], nowplaying: [...state.nowplaying]};
    case "load-nowplaying":
      return { nowplaying: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming ],toprated: [...state.toprated]};
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        nowplaying: [...state.nowplaying],
        toprated: [...state.toprated]
      };
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], toprated: [], nowplaying: [], favorites: [] });
  const [authenticated, setAuthenticated] = useState(false);

  const addToFavorites = (favorites) => {
   const result = addFavorite(favorites);
   console.log(result)
  };
 
  useEffect(() => {
    getMovies().then(movies => {
      console.log(movies);
      dispatch({ type: "load", payload: {movies}});
    });
  },[]);

  useEffect(() => {
    getUpcoming().then(movies => {
      console.log(movies);
      dispatch({ type: "load-upcoming", payload: {movies}});
    });
  },[]);

  useEffect(() => {
    getTopRatedMovies().then(movies => {
      console.log(movies);
      dispatch({ type: "load-toprated", payload: {movies}});
    });
  },[]);

  useEffect(() => {
    getNowPlayingMovies().then(movies => {
      console.log(movies);
      dispatch({ type: "load-nowplaying", payload: {movies}});
    });
  },[]);
  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        toprated: state.toprated,
        nowplaying: state.nowplaying,
        addToFavorites: addToFavorites,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider