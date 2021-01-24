import axios from 'axios';
import { IResult } from '../../interfaces/IMovie.interface';
import config from './config';

export async function getPopularMovies(): Promise<IResult> {
  const response = await axios.get(
    `${config.url}movie/popular?api_key=${config.api}&language=${config.language}&page=1&region=${config.region}`
  );
  return response.data;
}

export async function searchMovies(query: string): Promise<IResult> {
  const response = await axios.get(
    `${config.url}search/movie?api_key=${config.api}&language=${config.language}&page=1&region=${config.region}&query=${query}`
  );
  return response.data;
}
