import React from 'react';
import { IMovie } from '../../../interfaces/IMovie.interface';
import Movie from '../MovieCard/MovieCard.element';
import MovieGrid from './Movies.style';

interface MoviesProps {
  movies: IMovie[];
  setSelectedMovie: Function;
}

export default function Movies({ movies, setSelectedMovie }: MoviesProps) {
  return (
    <MovieGrid>
      {movies &&
        movies.map((m: IMovie) => (
          <Movie movie={m} handleClick={setSelectedMovie} key={m.id} />
        ))}
    </MovieGrid>
  );
}
