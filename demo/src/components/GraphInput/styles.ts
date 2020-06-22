import { CSSProperties } from 'react';

export const parent: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
};

export const child: CSSProperties = {
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: '100%',
  margin: '2px',
};
