import axios from 'axios';
import { APIConfig } from '../../interfaces/config.interface';
import config from './config';

export default async function getAPIConfig(): Promise<APIConfig> {
  const response = await axios.get(
    `${config.url}configuration?api_key=${config.api}`
  );
  return response.data;
}
