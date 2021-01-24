import { Result } from 'antd';
import React from 'react';
import styled from 'styled-components';
import View from '../../components/View/View.element';

interface Error404ViewProps {
  setView: Function;
}

export const Infos = styled.div``;
export const Affiche = styled.div``;

// This view will show only if the search or loading fails
export default function Error404View({ setView }: Error404ViewProps) {
  return (
    <View title={'Erreur 404'} returnToMainPage={setView}>
      <Result
        status={'404'}
        title={'404'}
        subTitle={'Sorry, the page you visited does not exist.'}
      />
    </View>
  );
}
