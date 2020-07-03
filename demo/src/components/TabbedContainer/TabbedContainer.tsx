import React, { useState } from 'react';
import styled from 'styled-components';
import TabBar from './TabBar';
import { getThemeProperties } from '../../themes';

const path = ['tabContainer'];
const { backgroundColor } = getThemeProperties(path);

const Container = styled.div`
  background-color: ${backgroundColor};
  border: 2px solid black;
`;

const Item = styled.div`
  padding: 5px;
`;

export interface TabbedContainerProps {
  labels?: string[];
  children?: React.ReactNode;
}

export const TabbedContainer = ({
  labels = [],
  children,
}: TabbedContainerProps) => {
  const [visibleChild, setVisibleChild] = useState(0);

  const padding = React.Children.count(children) - labels.length;
  const paddedLabels = [...labels, ...new Array(padding).fill(undefined)].map(
    (value, index) => value ?? index
  );

  return (
    <Container>
      <TabBar
        labels={paddedLabels}
        onClick={(index) => setVisibleChild(index)}
      />

      <Item>{React.Children.toArray(children)[visibleChild]}</Item>
    </Container>
  );
};
