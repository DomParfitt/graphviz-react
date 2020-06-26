import React from 'react';

interface GridProps {
  columns?: number;
}

const Grid = ({
  children,
  columns = React.Children.count(children),
}: GridProps & { children: React.ReactNode }) => {
  const parent: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
  };

  const container: React.CSSProperties = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
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
