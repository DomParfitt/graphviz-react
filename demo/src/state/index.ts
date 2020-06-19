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
    fit: true,
    zoom: false,
    scale: 1,
    tweenPrecision: 1,
    engine: 'dot',
  },
};
