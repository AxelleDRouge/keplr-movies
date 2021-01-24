import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import type { IMovie } from '../../../interfaces/IMovie.interface';
import MoviePoster from '../MoviePoster/MoviePoster.element';
import { Wrapper, OverlayWithTitle } from './MovieCard.style';

interface MovieProps {
  movie: IMovie;
  handleClick: Function;
}

export default function MovieCard({ movie, handleClick }: MovieProps) {
  const [showTitle, setShowTitle] = useState(false);
  const { sizes } = useContext(ThemeContext);

  return (
    <Wrapper
      onMouseEnter={() => setShowTitle(true)}
      onMouseLeave={() => setShowTitle(false)}
      onClick={() => handleClick(movie)}
    >
      {showTitle && <OverlayWithTitle>{movie.title}</OverlayWithTitle>}
      <MoviePoster
        size={`w${sizes.poster_size_large}`}
        posterPath={movie.poster_path}
        fit={false}
      />
    </Wrapper>
  );
}
