import React from 'react';
import MovieDetail from '../../components/Movie/MovieDetail/MovieDetail.element';
import View from '../../components/View/View.element';
import { IMovie } from '../../interfaces/IMovie.interface';

interface MovieViewProps {
  movie: IMovie;
  setView: Function;
}

// This view contains the Movie Details part, when clicking on a movie
export default function MovieView({ movie, setView }: MovieViewProps) {
  return (
    <View title={'Movies'} returnToMainPage={setView}>
      <MovieDetail movie={movie} />
    </View>
  );
}
