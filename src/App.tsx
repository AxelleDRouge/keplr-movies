import React, { useContext, useEffect, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './assets/theme.style';
import { IMovie } from './interfaces/IMovie.interface';
import { APIContext } from './services/context/api.context';
import DarkContextProvider from './services/context/dark.context';
import Error404View from './views/error404/Error404.view';
import HomeView from './views/home/Home.view';
import MovieView from './views/movie/Movie.view';

const GlobalStyle = createGlobalStyle({
  body: {
    fontFamily: 'Roboto',
    margin: '0',
    padding: '0',
  },
  '#root': {
    height: 'inherit',
  },
});

// Main part of the application, act like a Router
// contain the main CSS and the connexions to the Contexts
export default function App() {
  const [view, setView] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState<IMovie>();
  const { getImageConfig } = useContext(APIContext);

  useEffect(() => {
    getImageConfig && getImageConfig();
  }, [getImageConfig]);

  useEffect(() => {
    if (selectedMovie) {
      setView('movie');
    }
  }, [selectedMovie]);

  return (
    <DarkContextProvider>
      <ThemeProvider theme={theme}>
        {view === 'home' ? (
          <HomeView setSelectedMovie={setSelectedMovie} />
        ) : view === 'movie' && selectedMovie ? (
          <MovieView setView={setView} movie={selectedMovie} />
        ) : (
          <Error404View setView={setView} />
        )}
        <GlobalStyle />
      </ThemeProvider>
    </DarkContextProvider>
  );
}
