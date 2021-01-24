import { notification, Spin } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import Movies from '../../components/Movie/Movies/Movies.element';
import Search from '../../components/Search/Search.element';
import View from '../../components/View/View.element';
import { ErrorMessage } from '../../interfaces/error.interface';
import { IMovie, IPopularMovies } from '../../interfaces/IMovie.interface';
import { getPopularMovies, searchMovies } from '../../services/api/movies.api';

interface HomeViewProps {
  setSelectedMovie: Function;
}

// Home page, manage the loading of the main api data
export default function HomeView({ setSelectedMovie }: HomeViewProps) {
  const [movies, setMovies] = useState<IMovie[]>();

  const callPopularMovies = useCallback(async () => {
    const data = await getPopularMovies();
    if ((data as ErrorMessage).status_message !== undefined) {
      notification.error({
        message: (data as ErrorMessage).status_message,
      });
    } else {
      const moviesData = (data as IPopularMovies).results.map((movie) => movie);
      setMovies(moviesData);
    }
  }, []);

  const callSearchMovies = useCallback(async (e: HTMLInputElement) => {
    if (!e.value) {
      // if the search input is emptied, call back the popular movies
      callPopularMovies();
      return;
    }
    const data = await searchMovies(e.value);
    if ((data as ErrorMessage).status_message !== undefined) {
      notification.error({
        message: (data as ErrorMessage).status_message,
      });
    } else {
      const moviesData = (data as IPopularMovies).results.map((movie) => movie);
      setMovies(moviesData);
    }
  }, []);

  useEffect(() => {
    callPopularMovies();
  }, []);

  return (
    <View title={'Movies'}>
      <Search search={callSearchMovies} />
      {movies ? (
        <Movies movies={movies} setSelectedMovie={setSelectedMovie} />
      ) : (
        <Spin size={'large'} />
      )}
    </View>
  );
}
