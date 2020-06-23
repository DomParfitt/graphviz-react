// eslint-disable-next-line import/no-extraneous-dependencies
import { GraphvizOptions } from 'd3-graphviz';

export interface GraphvizState {
  dot: string;
  graphOptions: GraphvizOptions;
}

export const initialState: GraphvizState = {
  dot: '',
  graphOptions: {
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
  },
};
