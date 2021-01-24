import styled from 'styled-components';

export const Wrapper = styled.div<{ dark: boolean }>`
  height: inherit;
  background-color: ${(props) =>
    props.dark
      ? props.theme.dark.backgroundColor
      : props.theme.light.backgroundColor};
  color: ${(props) =>
    props.dark ? props.theme.dark.color : props.theme.light.color};
  display: grid;
  grid-template-rows: 5vh 1fr;
  grid-template-areas:
    'header'
    'back';

  @media (min-width: 1280px) {
    grid-template-columns: 17vw 1fr 17vw;
    grid-template-areas:
      'header header header'
      '... back ...';
  }
`;

export const Background = styled.div`
  grid-area: back;
  height: inherit;
  padding: 5px;
`;
