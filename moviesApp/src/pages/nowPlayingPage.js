import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddReviewButton from '../components/buttons/addReview'

const MoviesNowPlaying = () => {
  const context = useContext(MoviesContext);
  const nowplaying = context.nowplaying.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Now Playing Movies!"
      movies={nowplaying}  /* Changed */
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default MoviesNowPlaying;
