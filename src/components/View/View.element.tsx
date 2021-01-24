import React, { useContext } from 'react';
import Header from '../Header/Header.element';
import { DarkContext } from '../../services/context/dark.context';
import { Wrapper, Background } from './View.style';

interface ViewProps {
  title: string;
  children: JSX.Element | JSX.Element[];
  returnToMainPage?: Function;
}

export default function View({ title, children, returnToMainPage }: ViewProps) {
  const { darkTheme, setDarkTheme } = useContext(DarkContext);
  return (
    <Wrapper dark={darkTheme}>
      <Header
        dark={darkTheme}
        setTheme={setDarkTheme}
        title={title}
        returnToMainPage={returnToMainPage}
      />
      <Background>{children}</Background>
    </Wrapper>
  );
}

View.defaultProps = {
  returnToMainPage: undefined,
};
