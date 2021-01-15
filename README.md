# Assignment 2 - Web API.

Name: Your Name

## Features.

 + Upcoming Movies Page - An Upcoming Movies page using MongoDB 
 + Top Rated Movies Page - Top Rated movies using MongoDB not TMDB
 + Now Playing Movies Page - Now Playing movies using MongoDB not TMDB
 + Favorites Movies Page - Post and get from API to get favorites
 + Login and Sign up Authentication - Authentication to view pages, need to sign in

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:
```bat
git clone http:\myrepo.git
```
```bat
git install
```
Install the following:
+ Node NPM: use command npm install
+ MongoDB Instance: instructions on website
+ Babel: node install babel
+ nodemon: install nodemon
+ eslint: npm install eslint
+ express: npm install express


## API Configuration
You need an .env file containing the following.
```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
```
Additionally you need to make a .gitignore file containing:
```
**node_modules
build
npm-debug.log
.env
.DS_store
/coverage
/**/.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/users/user1/favourites | Get User Favourites  | Post a new Favourite | ... | ...
| /api/users/ | get user info | Login info | Create new user | ...
| /api/movies/upcoming | get upcoming movies | ... | ... | ...
| /api/movies/nowplaying | get now playing movies | ... | ... | ...
| /api/movies/toprated | get top rated movies | ... | ... | ...

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

Authentication and security is working on the Movies page, favorites movie page, upcoming, top rated and now playing. They are all specified as private routes and are protected and can only be viewed once logged in. Additionally favorites page shows different movies for different users. Passport and jwt authentication from labs working on routes.

## Integrating with React App

I integrated my assignment 1 react app with my api, the main changes were: adding a proxy to port 8080 in package.json and editing the tmdb-api file to be my own movie-api file and changing all the methods to use the /api/movies and /api/users routes. An example method can be seen below. 

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~

## Extra features

- Favorites Page
- Upcoming Page
- Top Rated Page
- Now Playing Page
- Authentication & Security
- MongoDB & for pages above
