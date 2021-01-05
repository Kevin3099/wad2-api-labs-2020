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
  export const getUpcoming = () => {
    return fetch(
       '/api/upcoming',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
  export const getNowPlayingMovies = () => {
    return fetch(
       '/api/nowPlaying',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
  export const getTopRatedMovies = () => {
    return fetch(
       '/api/topRated',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };