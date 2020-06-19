import React from 'react';

interface GridProps {
  columns?: number;
}

const Grid = ({
  columns,
  children,
}: GridProps & { children: React.ReactNode }) => {
  const parent: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  const container: React.CSSProperties = {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: `${100 / (columns || React.Children.count(children))}%`,
    padding: '10px',
  };

  return (
    <div style={parent}>
      {React.Children.map(children, (child) => (
        <div style={container}>{child}</div>
      ))}
    </div>
  );
};

export default Grid;
