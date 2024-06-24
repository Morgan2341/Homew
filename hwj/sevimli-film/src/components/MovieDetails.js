import React from 'react';

function MovieDetails({ title, director, releaseYear, studio }) {
  return (
    <div>
      <h2>{title}</h2>
      <p><strong>Rejissor:</strong> {director}</p>
      <p><strong>Buraxılış ili:</strong> {releaseYear}</p>
      <p><strong>Studio:</strong> {studio}</p>
    </div>
  );
}

export default MovieDetails;
