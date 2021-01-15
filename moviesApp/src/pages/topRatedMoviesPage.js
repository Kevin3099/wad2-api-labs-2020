import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddReviewButton from '../components/buttons/addReview'

const TopRatedMovies = () => {
  const context = useContext(MoviesContext);
  const toprated = context.toprated.filter((m) => {  // New
    return !("favorite" in m);
  });

  return (
    <PageTemplate
      title="Top rated Movies!"
      movies={toprated}  /* Changed */
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default TopRatedMovies;