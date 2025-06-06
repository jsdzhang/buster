import type React from 'react';
import { DEFAULT_CHART_COLORS, DISABLED_CHART_COLORS } from './config';

export const ChartIcon_Pie: React.FC<{ colors?: string[]; disabled?: boolean }> = ({
  colors: colorsProp = DEFAULT_CHART_COLORS,
  disabled
}) => {
  const colors = disabled ? DISABLED_CHART_COLORS : colorsProp;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 23 22"
      fill="none">
      <title>Pie Chart Icon</title>
      <path
        d="M22.167 11.0073C22.167 16.2133 18.2042 20.4938 13.1305 20.9969C12.5788 21.0516 12.128 20.5989 12.128 20.0444C12.1281 16.887 12.1286 7.05258 12.1286 1.96812C12.1286 1.41368 12.5794 0.962974 13.1311 1.01768C18.2048 1.52071 22.167 5.80122 22.167 11.0073Z"
        fill={colors[0]}
      />
      <path
        d="M2.7086 7.84784C2.11992 7.66192 1.83544 6.99065 2.14196 6.45478C4.31952 2.64791 6.87904 1.23031 10.1205 1.00234C10.6735 0.963439 11.1241 1.41549 11.1241 1.96992C11.1241 3.30617 11.1241 5.88568 11.1241 9.13468C11.1241 9.81322 10.4649 10.2974 9.81783 10.093L2.7086 7.84784Z"
        fill={colors[1]}
      />
      <path
        d="M1.3482 9.50354C1.45309 8.94807 2.03203 8.63807 2.57108 8.8083L10.422 11.2877C10.8395 11.4196 11.1235 11.8058 11.1235 12.2437C11.1237 13.5251 11.124 16.3853 11.1241 20.0422C11.1241 20.5967 10.6732 21.0514 10.1216 20.9954C4.79466 20.4545 0.185484 15.6612 1.3482 9.50354Z"
        fill={colors[2]}
      />
    </svg>
  );
};
