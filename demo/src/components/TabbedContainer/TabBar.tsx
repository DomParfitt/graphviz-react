import React, { useState } from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const Bar = styled.div`
  display: flex;
  > * {
    flex-grow: 1;
  }
`;

interface TabBarProps {
  labels?: string[];
  onClick?: (index: number) => void;
}

const TabBar = ({ labels = [], onClick = () => {} }: TabBarProps) => {
  const [active, setActive] = useState(0);

  return (
    <Bar>
      {labels.map((label, index) => (
        <Tab
          active={active === index}
          label={label}
          onClick={() => {
            onClick(index);
            setActive(index);
          }}
        />
      ))}
    </Bar>
  );
};

export default TabBar;
