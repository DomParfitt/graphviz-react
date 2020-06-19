// eslint-disable-next-line import/no-extraneous-dependencies
import type { GraphvizOptions } from 'd3-graphviz';
import { Graphviz } from 'graphviz-react';
import React, { useState } from 'react';
import { GraphInput, OptionsSelector, Options } from './components';

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

  const parent: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  const child: React.CSSProperties = {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '30%',
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Graphviz-React</h1>
      <div style={parent}>
        <div style={child}>
          <GraphInput initialDot={dot} onUpdate={(newDot) => setDot(newDot)} />
        </div>
        <div style={child}>
          <OptionsSelector
            options={defaults}
            onChange={(name, value) =>
              setGraphOptions({ ...graphOptions, [name]: value })
            }
            allowedValues={allowedValues}
          />
        </div>
        <div style={child}>
          <Graphviz dot={dot} options={graphOptions} />
        </div>
      </div>
    </>
  );
};

export default App;
