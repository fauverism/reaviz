import React, { Component, cloneElement } from 'react';
import { Tooltip, TooltipProps } from './Tooltip';
import { TooltipTemplate } from './TooltipTemplate';

export interface ChartTooltipProps extends TooltipProps {
  /**
   * Content for the tooltip.
   */
  content: any;

  /**
   * Tooltip data value.
   */
  value?: any;

  /**
   * Color scheme to apply.
   */
  color?: any;

  /**
   * Complete dataset.
   */
  data: any;

  /**
   * Whether the tooltip should move with the cursor or not.
   */
  followCursor?: boolean;
}

export class ChartTooltip extends Component<ChartTooltipProps> {
  static defaultProps: Partial<ChartTooltipProps> = {
    content: <TooltipTemplate />
  };

  renderContent() {
    const { content, value, data, color } = this.props;

    if (!value && !data) {
      return null;
    }

    return typeof content === 'function'
      ? content(data || value, color)
      : cloneElement(content, {
          ...content.props,
          value,
          color
        });
  }

  render() {
    const { content, value, data, color, ...rest } = this.props;
    return <Tooltip {...rest} content={this.renderContent.bind(this)} />;
  }
}
