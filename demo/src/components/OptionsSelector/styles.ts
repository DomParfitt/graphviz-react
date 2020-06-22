import { CSSProperties } from 'react';

export const parent: CSSProperties = {
  border: '1px solid black',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 50%)',
};

export const child: CSSProperties = {
  border: '1px solid black',
  padding: '10px',
  textAlign: 'center',
};
