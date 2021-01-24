import React from 'react';
import { Wrapper, StyledInput } from './Search.style';

interface SearchProps {
  search: Function;
}
export default function Search({ search }: SearchProps) {
  return (
    <Wrapper className='site-input-group-wrapper'>
      <StyledInput
        placeholder={'Rechercher un film'}
        allowClear
        onChange={(e) => search(e.target)}
      />
    </Wrapper>
  );
}
