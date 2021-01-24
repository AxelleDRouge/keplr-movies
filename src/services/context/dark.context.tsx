import React, { useState } from 'react';

interface DarkContextProps {
  darkTheme: boolean;
  setDarkTheme: Function;
}

const defaultContext: any = {};

export const DarkContext = React.createContext(defaultContext);

interface DarkContextProviderProps {
  children: JSX.Element;
}

export default function DarkContextProvider({
  children,
}: DarkContextProviderProps) {
  const [darkTheme, setDarkTheme] = useState(false);

  const defaultValue: DarkContextProps = {
    darkTheme,
    setDarkTheme,
  };

  return (
    <DarkContext.Provider value={defaultValue}>{children}</DarkContext.Provider>
  );
}
