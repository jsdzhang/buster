import type React from 'react';

export const RedshiftIcon: React.FC<{
  onClick?: () => void;
  style?: React.CSSProperties;
  size?: number;
  className?: string;
}> = (props) => {
  return (
    <svg
      {...props}
      width={props.size || 24}
      height={props.size || 24}
      enableBackground="new 0 0 1615 1783.7"
      viewBox="0 0 1615 1783.7"
      xmlns="http://www.w3.org/2000/svg">
      <title>Redshift Icon</title>
      <path d="m807.5 1363.8 678.3 161.5v-1270.5l-678.3 161.5z" fill="#205b97" />
      <path
        d="m1485.8 254.8 129.2 64.6v1141.3l-129.2 64.6zm-678.3 1109-678.3 161.5v-1270.5l678.3 161.5z"
        fill="#5193ce"
      />
      <path d="m129.2 254.8-129.2 64.6v1141.3l129.2 64.6z" fill="#205b97" />
      <path d="m979.8 1783.7 258.4-129.2v-1525.3l-258.4-129.2-79 847z" fill="#5193ce" />
      <path d="m635.2 1783.7-258.4-129.2v-1525.3l258.4-129.2 79 847z" fill="#205b97" />
      <path d="m635.2 0h348.1v1780.1h-348.1z" fill="#2e73b7" />
    </svg>
  );
};
