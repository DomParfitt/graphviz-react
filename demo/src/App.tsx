// eslint-disable-next-line import/no-extraneous-dependencies
import type { GraphvizOptions } from 'd3-graphviz';
import { Graphviz } from 'graphviz-react';
import React, { useState } from 'react';
import { GraphInput, OptionsSelector, Options } from './components';
import Grid from './components/Grid';

const defaults: Options<GraphvizOptions> = {
  height: 550,
  width: 550,
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
    <>
      <h1 style={{ textAlign: 'center' }}>Graphviz-React</h1>
      <Grid>
        <GraphInput initialDot={dot} onUpdate={(newDot) => setDot(newDot)} />
        <OptionsSelector
          options={defaults}
          onChange={(name, value) =>
            setGraphOptions({ ...graphOptions, [name]: value })
          }
          allowedValues={allowedValues}
        />
        <Graphviz dot={dot} options={graphOptions} />
      </Grid>
    </>
  );
};

export default App;
