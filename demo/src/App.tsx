// eslint-disable-next-line import/no-extraneous-dependencies
import type { GraphvizOptions } from 'd3-graphviz';
import React, { useState } from 'react';
import {
  GraphInput,
  Graphviz,
  Grid,
  OptionsSelector,
  Options,
  TabbedContainer,
  ThemePicker,
  Title,
} from './components';

const { innerWidth, innerHeight } = window;

const defaults: Options<GraphvizOptions> = {
  height: Math.floor(innerHeight * 0.7),
  width: Math.floor(innerWidth * 0.75),
  scale: 1,
  tweenPrecision: 1,
  engine: 'dot',
  keyMode: 'title',
  convertEqualSidedPolygons: false,
  fade: false,
  growEnteringEdges: false,
  fit: true,
  tweenPaths: false,
  tweenShapes: false,
  useWorker: false,
  zoom: false,
};

const allowedValues = {
  engine: ['circo', 'dot', 'fdp', 'neato', 'osage', 'patchwork', 'twopi'],
  keyMode: ['title', 'id', 'tag-index', 'index'],
};

const App = () => {
  const [dot, setDot] = useState('graph { a }');
  const [graphOptions, setGraphOptions] = useState(defaults);

  return (
    <ThemePicker themes={['dark', 'light', 'none']}>
      <Title>Graphviz-React</Title>
      <Grid>
        <TabbedContainer labels={['Input', 'Settings']}>
          <GraphInput initialDot={dot} onUpdate={(newDot) => setDot(newDot)} />
          <OptionsSelector
            options={graphOptions}
            onChange={(name, value) =>
              setGraphOptions({ ...graphOptions, [name]: value })
            }
            allowedValues={allowedValues}
          />
        </TabbedContainer>
        <Graphviz dot={dot} options={graphOptions} />
      </Grid>
    </ThemePicker>
  );
};

export default App;
