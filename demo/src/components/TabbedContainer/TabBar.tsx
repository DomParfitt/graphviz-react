import React, { useState } from 'react';
import { Tab } from './Tab';

interface TabBarProps {
  labels?: string[];
  onClick?: (index: number) => void;
}

const TabBar = ({ labels = [], onClick = (index) => {} }: TabBarProps) => {
  const [active, setActive] = useState(0);

  return (
    <div>
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
    </div>
  );
};

export default TabBar;
