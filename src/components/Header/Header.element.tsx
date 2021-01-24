import { Switch } from 'antd';
import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Wrapper, StyledButton, Title, ModeToggle } from './Header.style';

interface HeaderProps {
  title: string;
  dark: boolean;
  setTheme: Function;
  returnToMainPage?: Function;
}

export default function Header({
  title,
  dark,
  setTheme,
  returnToMainPage,
}: HeaderProps) {
  return (
    <Wrapper darkTheme={dark}>
      <StyledButton
        icon={
          <LeftOutlined
            onClick={() => returnToMainPage && returnToMainPage('home')}
          />
        }
        darkTheme={dark}
        visibility={returnToMainPage ? 'visible' : 'hidden'}
      />
      <Title>{title}</Title>
      <ModeToggle>
        <span className={'material-icons'}>light_mode</span>
        <Switch onChange={() => setTheme(!dark)} size={'default'} />
        <span className={'material-icons'}>dark_mode</span>
      </ModeToggle>
    </Wrapper>
  );
}

Header.defaultProps = {
  returnToMainPage: undefined,
};
