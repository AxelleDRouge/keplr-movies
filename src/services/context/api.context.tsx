import React, { useCallback, useState } from 'react';
import { APIConfig, ImageConfig } from '../../interfaces/config.interface';
import getAPIConfig from '../api/images.api';

interface APIContextProps {
  imagesConfig?: ImageConfig;
  getImageConfig?: Function;
}

const defaultContext: APIContextProps = {};

export const APIContext = React.createContext(defaultContext);

interface APIContextProviderProps {
  children: JSX.Element;
}

// this context manages the api configuration
export default function APIContextProvider({
  children,
}: APIContextProviderProps) {
  const [imagesConfig, setImagesConfig] = useState<ImageConfig>();

  const getImageConfig = useCallback(async () => {
    const response: APIConfig = await getAPIConfig();
    setImagesConfig(response.images);
  }, []);

  const defaultValue: APIContextProps = {
    imagesConfig,
    getImageConfig,
  };

  return (
    <APIContext.Provider value={defaultValue}>{children}</APIContext.Provider>
  );
}
