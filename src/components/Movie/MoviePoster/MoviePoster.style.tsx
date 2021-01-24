import styled from 'styled-components';

export const Image = styled.img<{ fit: boolean }>`
  width: fit-content;
  height: fit-content;
  margin: auto;

  @media (min-width: 375px) {
    width: ${(props) => (props.fit ? 'fit-content' : '100%')};
    height: ${(props) => (props.fit ? 'fit-content' : '100%')};
  }
`;
