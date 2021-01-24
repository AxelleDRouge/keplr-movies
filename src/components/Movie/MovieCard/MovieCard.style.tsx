import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const OverlayWithTitle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.342);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 10px;
  font-weight: 700;
`;
