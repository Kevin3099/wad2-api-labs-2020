import React from 'react';
import { useContext } from 'react';
import { MoviesContext } from '../contexts/moviesContext';
import addToFavoritesButton from '../components/Buttons/addToFavoritesButton';

export const PublicPage = () => {
    return <h2>Public page</h2>
 }

 export const Movies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Movies Data </h2>
        <div>
            {context.movies.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
            action={(movie => {
                return <addToFavoritesButton movie={movie} />;
            })}
        </div>
    </>
}
export const Favorites = () => {
    const context = useContext(MoviesContext);
    const favorites = context.movies.filter(m=>m.favorite);
    return <>
        <h2>Favorites Data </h2>
        <div>
            {context.movies.map(movie => { return <>{favorites.id},{favorites.title}<br /></> })}
        </div>
    </>
}

export const Upcoming = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Upcoming Movies </h2>
        <div>
            {context.upcoming.map(upcoming => { return <>{upcoming.id},{upcoming.title}<br /></> })}
        </div>
    </>
}

export const TopRatedMovies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Top Rated Movies </h2>
        <div>
            {context.toprated.map(toprated => { return <>{toprated.id},{toprated.title}<br /></> })}
        </div>
    </>
}

export const NowPlayingMovies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Now Playing Movies </h2>
        <div>
            {context.nowplaying.map(nowplaying => { return <>{nowplaying.id},{nowplaying.title}<br /></> })}
        </div>
    </>
}

 export const Profile = () => {
    return <h2>My Profile </h2>
}

 export const HomePage = () => {
     return  <h2>Home page</h2>
 };
 