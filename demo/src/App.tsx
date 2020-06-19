// eslint-disable-next-line import/no-extraneous-dependencies
import type { GraphvizOptions } from 'd3-graphviz';
import { Graphviz } from 'graphviz-react';
import React, { useState } from 'react';
import { GraphInput, OptionsSelector, Options } from './components';

const defaults: Options<GraphvizOptions> = {
  height: 550,
  width: 550,
  fit: true,
  zoom: false,
  scale: 1,
  tweenPrecision: 1,
  engine: 'dot',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const options = [
  { name: 'useWorker', type: 'boolean' },
  {
    name: 'engine',
    type: 'list',
    values: ['circo', 'dot', 'fdp', 'neato', 'osage', 'patchwork', 'twopi'],
    default: defaults.engine,
  },
  {
    name: 'keyMode',
    type: 'list',
    values: ['title', 'id', 'tag-index', 'index'],
  },
  { name: 'fade', type: 'boolean' },
  { name: 'tweenPaths', type: 'boolean' },
  { name: 'tweenShapes', type: 'boolean' },
  { name: 'convertEqualSidedPolygons', type: 'boolean' },
  { name: 'tweenPrecision', type: 'number', default: defaults.tweenPrecision },
  { name: 'growEnteringEdges', type: 'boolean' },
  { name: 'zoom', type: 'boolean', default: defaults.zoom },
  { name: 'width', type: 'number', default: defaults.width },
  { name: 'height', type: 'number', default: defaults.height },
  { name: 'scale', type: 'number', default: defaults.scale },
  { name: 'fit', type: 'boolean', default: defaults.fit },
];

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
            allowedValues={{
              engine: [
                'circo',
                'dot',
                'fdp',
                'neato',
                'osage',
                'patchwork',
                'twopi',
              ],
            }}
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
