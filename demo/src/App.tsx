// eslint-disable-next-line import/no-extraneous-dependencies
import type { GraphvizOptions } from 'd3-graphviz';
import { Graphviz } from 'graphviz-react';
import React, { useState } from 'react';
import { GraphInput, OptionsSelector, Options } from './components';
import Grid from './components/Grid';

const defaults: Options<GraphvizOptions> = {
  convertEqualSidedPolygons: false,
  engine: 'dot',
  fade: false,
  growEnteringEdges: false,
  fit: true,
  keyMode: 'title',
  height: 550,
  scale: 1,
  tweenPaths: false,
  tweenPrecision: 1,
  tweenShapes: false,
  useWorker: false,
  width: 550,
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
