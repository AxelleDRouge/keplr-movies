import { Button } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div<{ darkTheme: boolean }>`
  grid-area: header;
  background-color: ${(props) =>
    props.darkTheme
      ? props.theme.dark.headerbackgroundColor
      : props.theme.light.headerbackgroundColor};
  display: flex;
  color: white;
  font-weight: 700;
  align-items: center;
  padding: 0 5px 0 5px;
`;

export const Title = styled.div`
  text-align: center;
  flex-grow: 1;
  font-size: 2em;
`;

export const StyledButton = styled(Button)<{
  darkTheme: boolean;
  visibility: string;
}>`
  visibility: ${(props) => props.visibility};
  background: transparent;
  box-shadow: unset;
  border: none;
  color: ${(props) =>
    props.darkTheme ? props.theme.dark.color : props.theme.light.color};
`;

export const ModeToggle = styled.div`
  display: flex;
  font-size: smaller;
`;
