import React from 'react';
import { G, Rect, Text } from 'react-native-svg';

import moment from 'moment';

const Tooltip = ({
  // eslint-disable-next-line react/prop-types
  x,
  y,
  tooltipX,
  tooltipY,
  color,
  index,
  dataLength,
}) => {
  let xAxis = 4;
  if (dataLength > 4) {
    if (index < 2) {
      xAxis = 35;
    } else if (index > dataLength - 2) {
      xAxis = -20;
    } else {
      xAxis = 4;
    }
  }

  return (
    <G x={x(tooltipX) - 40} y={y(tooltipY)}>
      <G y={tooltipY > 9 ? 20 : -29} x={xAxis}>
        <Rect x={-2} y={0} height={22} width={70} stroke={color} fill="white" ry={10} rx={10} />
        <Rect x={-2} y={0} height={22} width={18} fill={color} ry={10} rx={10} />
        <Rect x={10} y={0} height={22} width={tooltipY > 9 ? 12 : 10} fill={color} />
        <Text x={6} y={14} stroke="#fff">
          {tooltipY}
        </Text>
        <Text x={tooltipY > 9 ? 24 : 22} y={14}>
          {moment(tooltipX).format('MMM DD')}
        </Text>
      </G>
    </G>
  );
};

export default Tooltip;
