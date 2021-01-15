export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
    process.env.REACT_APP_TMDB_KEY +
    "&language=en-US"
  )
    .then(res => res.json())
    .then(json => json.genres);
};

export const getMovieReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.results);
};

export const getMovieCredits = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then(res => res.json())
    .then(json => json.cast);
};


export const login = (username, password) => {
  return fetch('/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getMovie = () => {
  return fetch(
     '/api/movie',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getNowPlayingMovies = () => {
  return fetch(
     '/api/movies/nowplaying',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getUpcomingMovies = () => {
  return fetch(
     '/api/movies/upcoming',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getTopRatedMovies = () => {
  return fetch(
     '/api/movies/toprated',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};