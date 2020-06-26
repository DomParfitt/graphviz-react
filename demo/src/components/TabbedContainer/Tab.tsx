import React, { useState } from 'react';

const style: React.CSSProperties = {
  border: 'none',
  outline: 'none',
};

const activeStyle: React.CSSProperties = {
  backgroundColor: 'darkgrey',
};

const hoverStyle: React.CSSProperties = {
  backgroundColor: 'pink',
};

export interface TabProps {
  active: boolean;
  label: string;
  onClick?: () => void;
}

export const Tab = ({ active, label, onClick = () => {} }: TabProps) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      style={{
        ...style,
        ...(active ? activeStyle : {}),
        ...(hover ? hoverStyle : {}),
      }}
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {label}
    </button>
  );
};
