import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: max-content 1fr;

  @media (min-width: 414px) {
    grid-template-rows: 1fr;
    grid-template-columns: 2fr ${(props) =>
        `${props.theme.sizes.poster_size}px`};
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: inherit;
  font-weight: 700;
`;

export const Overview = styled.div``;
export const Note = styled.h3`
  color: inherit;
`;
