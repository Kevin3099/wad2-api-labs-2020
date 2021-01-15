import React, { useEffect, useState } from "react";
import { getMovieCredits } from "../../api/tmdb-api";

export default ({ movie }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then(credits => {
      setCredits(credits);
    });
  },);

  return(
      credits.map(credits => {
        return (
          <div className="col-sm-3">
              <div className="card  bg-white">
                <table>
                  <tr>
                    <td><b>Actor:</b></td>
                    <td>{credits.name}</td>
                  </tr>
                  <tr>
                    <td><b>Character:</b></td>
                    <td>{credits.character}</td>
                  </tr>
                </table>
              </div>
          </div>
        )
      })
  );
};