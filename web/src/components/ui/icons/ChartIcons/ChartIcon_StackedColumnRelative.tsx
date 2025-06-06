import { DEFAULT_CHART_COLORS, DISABLED_CHART_COLORS } from './config';
import type React from 'react';

export const ChartIcon_StackedColumnRelative: React.FC<{
  colors?: string[];
  disabled?: boolean;
}> = ({ colors: colorsProp = DEFAULT_CHART_COLORS, disabled }) => {
  const colors = disabled ? DISABLED_CHART_COLORS : colorsProp;
  const firstColor = colors[0] || '#575859';
  const secondColor = colors[1] || '#575859';
  const thirdColor = colors[2] || '#575859';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 23 22"
      fill="none">
      <title>Stacked Column Relative Chart Icon</title>
      <path
        d="M16.834 11C16.834 10.4477 17.2817 10 17.834 10H19.834C20.3863 10 20.834 10.4477 20.834 11V22H16.834V11Z"
        fill={firstColor}
      />
      <path
        d="M16.834 5C16.834 4.44772 17.2817 4 17.834 4H19.834C20.3863 4 20.834 4.44772 20.834 5V8C20.834 8.55228 20.3863 9 19.834 9H17.834C17.2817 9 16.834 8.55228 16.834 8V5Z"
        fill={secondColor}
      />
      <path
        d="M11.834 15C11.834 14.4477 12.2817 14 12.834 14H14.834C15.3863 14 15.834 14.4477 15.834 15V22H11.834V15Z"
        fill={firstColor}
      />
      <path
        d="M11.834 6C11.834 5.44772 12.2817 5 12.834 5H14.834C15.3863 5 15.834 5.44772 15.834 6V12C15.834 12.5523 15.3863 13 14.834 13H12.834C12.2817 13 11.834 12.5523 11.834 12V6Z"
        fill={secondColor}
      />
      <path
        d="M6.83398 17C6.83398 16.4477 7.2817 16 7.83398 16H9.83398C10.3863 16 10.834 16.4477 10.834 17V22H6.83398V17Z"
        fill={firstColor}
      />
      <path
        d="M6.83398 7C6.83398 6.44772 7.2817 6 7.83398 6H9.83398C10.3863 6 10.834 6.44772 10.834 7V14C10.834 14.5523 10.3863 15 9.83398 15H7.83398C7.2817 15 6.83398 14.5523 6.83398 14V7Z"
        fill={secondColor}
      />
      <path
        d="M1.83398 17C1.83398 16.4477 2.2817 16 2.83398 16H4.83398C5.38627 16 5.83398 16.4477 5.83398 17V22H1.83398V17Z"
        fill={firstColor}
      />
      <path
        d="M1.83398 9C1.83398 8.44772 2.2817 8 2.83398 8H4.83398C5.38627 8 5.83398 8.44772 5.83398 9V14C5.83398 14.5523 5.38627 15 4.83398 15H2.83398C2.2817 15 1.83398 14.5523 1.83398 14V9Z"
        fill={secondColor}
      />
      <path
        d="M6.83398 1C6.83398 0.447715 7.2817 0 7.83398 0H9.83398C10.3863 0 10.834 0.447715 10.834 1V4C10.834 4.55228 10.3863 5 9.83398 5H7.83398C7.2817 5 6.83398 4.55228 6.83398 4V1Z"
        fill={thirdColor}
      />
      <path
        d="M11.834 1C11.834 0.447715 12.2817 0 12.834 0H14.834C15.3863 0 15.834 0.447715 15.834 1V3C15.834 3.55228 15.3863 4 14.834 4H12.834C12.2817 4 11.834 3.55228 11.834 3V1Z"
        fill={thirdColor}
      />
      <path
        d="M16.834 1C16.834 0.447715 17.2817 0 17.834 0H19.834C20.3863 0 20.834 0.447715 20.834 1V2C20.834 2.55228 20.3863 3 19.834 3H17.834C17.2817 3 16.834 2.55228 16.834 2V1Z"
        fill={thirdColor}
      />
      <path
        d="M1.83398 1C1.83398 0.447715 2.2817 0 2.83398 0H4.83398C5.38627 0 5.83398 0.447715 5.83398 1V6C5.83398 6.55228 5.38627 7 4.83398 7H2.83398C2.2817 7 1.83398 6.55228 1.83398 6V1Z"
        fill={thirdColor}
      />
    </svg>
  );
};
