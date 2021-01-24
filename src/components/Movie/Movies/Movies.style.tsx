import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);
  grid-gap: 5px;

  @media (min-width: 768px) {
    grid-gap: 15px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1468px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
