import { CSSProperties } from 'react';

export const parent: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  border: '1px solid black',
};

export const child: CSSProperties = {
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: '45%',
  margin: '10px',
};
