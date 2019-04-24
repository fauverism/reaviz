import React, { Component, Fragment } from 'react';
import { RadialAxisTick, RadialAxisTickProps } from './RadialAxisTick';
import { CloneElement } from '../../../utils/children';
import { getTicks } from '../../../utils/ticks';
import { TimeInterval } from 'd3-time';

export interface RadialAxisTickSeriesProps {
  scale: any;
  count?: number;
  interval?: number | TimeInterval;
  tickValues: any[];
  outerRadius: number;
  innerRadius: number;
  tick: JSX.Element;
}

export class RadialAxisTickSeries extends Component<RadialAxisTickSeriesProps> {
  static defaultProps: Partial<RadialAxisTickSeriesProps> = {
    count: 12,
    tick: <RadialAxisTick />
  };

  render() {
    const { scale, count, outerRadius, tick, tickValues, innerRadius, interval } = this.props;
    const ticks = getTicks(scale, tickValues, count, interval);

    return (
      <Fragment>
        {ticks.map((data, i) => (
          <CloneElement<RadialAxisTickProps>
            element={tick}
            key={i}
            index={i}
            scale={scale}
            data={data}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
          />
        ))}
      </Fragment>
    );
  }
}
