import React from 'react';
import MovieDetails from './components/MovieDetails';
import Poster from './components/Poster';
import './App.css';

function App() {
  const movie = {
    title: 'The Dark Knight Rises',
    director: 'Christopher Nolan',
    releaseYear: 2012,
    studio: 'Sony Pictures Studios',
    posterUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Dark_Knight_Rises&psig=AOvVaw1W6WKdSM0qnJEUo5UbAxrY&ust=1719321172371000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIC6-86o9IYDFQAAAAAdAAAAABAE'
  };

  return (
    <div className="App">
      <h1>Sevimli Film</h1>
      <Poster posterUrl={movie.posterUrl} />
      <MovieDetails 
        title={movie.title} 
        director={movie.director} 
        releaseYear={movie.releaseYear} 
        studio={movie.studio} 
      />
    </div>
  );
}

export default App;
