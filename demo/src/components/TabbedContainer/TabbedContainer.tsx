import React, { useState } from 'react';
import TabBar from './TabBar';

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
    <div>
      <TabBar
        labels={paddedLabels}
        onClick={(index) => setVisibleChild(index)}
      />
      {React.Children.map(children, (child, index) =>
        index === visibleChild ? <div>{child}</div> : null
      )}
    </div>
  );
};
