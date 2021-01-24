import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { IMovie } from '../../../interfaces/IMovie.interface';
import MoviePoster from '../MoviePoster/MoviePoster.element';
import { Wrapper, Infos, Title, Overview, Note } from './MovieDetail.style';

interface MovieDetailProps {
  movie: IMovie;
}

export default function MovieDetail({ movie }: MovieDetailProps) {
  const { sizes } = useContext(ThemeContext);
  return (
    <Wrapper>
      <Infos>
        <Title>{movie.title}</Title>
        <Overview>{movie.overview}</Overview>
        <Note>
          {movie.vote_average}
          /10
        </Note>
      </Infos>
      <MoviePoster
        size={`w${sizes.poster_size}`}
        posterPath={movie.poster_path}
        fit
      />
    </Wrapper>
  );
}
