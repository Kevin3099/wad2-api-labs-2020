# Assignment 1 - ReactJS app.

Name: Kevin Power

## Features.

A bullet-point list of the ADDITIONAL user features implemented for the  Movies Fan app,
 
 + Watch List Button -  Adds movie's to the watch list page
 + Watch List Page - Page to display Watch list movies
 + Top Rated Movies Page - A new page to display top rated movies
 + Now Playing Movies Page - A new page to display Now Playing movies
 + Added Upcoming Movies Page - A new page for Upcoming movies 
 + Added Credits to movie details - Add credits to the movie details with a button to display them
 + Added Story Book Support for Credits - Added Story Book for Credits
 + Story Book for Movie Reviews - Added Movie Reviews Story book
 + Story Book for Favorites - Added the favorites button to story book

## Setup requirements (If required).

Download NPM package and run npm start to run the program.

## API Data Model.

Additional Endpoints used.

+ https://api.themoviedb.org/3/movie/${id} - get detailed information on a specific movie. 
+ https://api.themoviedb.org/3/genre/movie/list - get a list of movie genres
+ https://api.themoviedb.org/3/movie/${id}/credits - get movie credits
+ https://api.themoviedb.org/3/movie/now_playing - get list of now playing movies
+ https://api.themoviedb.org/3/movie/top_rated - get list of top rated movies
+ https://api.themoviedb.org/3/movie/upcoming - get list of upcoming movies

## App Design.

### Component catalogue (If required).
Example one's
![][stories]

My StoryBook Components added.

### UI Design.

![][movieDetail]
>Shows detailed information on a movie. Clicking the 'Show Reviews' button will display extracts from critic reviews.
![][review]
>Shows the full text for a movie review. 
![][topRated]
> Shows the top rated movies
![][nowPlaying]
> Shows the now playing movies
![][upcoming]
> Show Upcoming movies
![][credits]
> Show Credits

## Routing.

+ /reviews/form - Route to review form 
+ /reviews/:id/ - Specific movie reviews 
+ /movies/favorites - Favorites movie route
+ /movies/upcoming - Upcoming movie route
+ /movies/watchList - Watch List movie route
+ /movies/toprated - Top Rated movie route
+ /movies/nowplaying - Now Playing Movie Route
 + /movies/:id - Movies ID route

### Data hyperlinking.

![][cardLink]
> Clicking a card causes the display of that movie's details.

![][reviewLink]
>Clicking the 'Full Review' for a review extract will display the full text of the review.

![][creditsLink]
> Clicking Credits shows the credits for the specific movie you are on.

![][favoriteLink]
> Clicking Favorites button links to favorites page.

![][upcomingLink]
> Clicking upcoming button links to upcoming page.

---------------------------------

[model]: ./data.jpg
[movieDetail]: ./public/movieDetail.png
[review]: ./public/review.png
[reviewLink]: ./public/reviewLink.png
[cardLink]: ./public/cardLink.png
[creditsLink]: ./public/creditsLink.png
[favoritesLink]: ./public/TopBarLink.png
[upcomingLink]: ./public/TopBarLink.png
[stories]: ./public/storybook.png
[newStories]: ./public/newStoryBook.png
[topRated]: ./public/topRated.png
[nowPlaying]: ./public/nowPlaying.png
[upcoming]: ./public/upcoming.png
[credits]: ./public/creditsLink.png
