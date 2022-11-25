type IconProps = {
  fill?: string;
  height?: number | string;
  width?: number | string;
  strokeWidth?: number | string;
  strokeColor?: string;
};

export const QuoteIcon: React.FC<IconProps> = ({
  fill = "none",
  height = 40,
  width = 58,
  strokeWidth = 2,
  strokeColor = "#fff",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 58 40.299"
      fill={fill}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    >
      <g transform="translate(-601.91 -56.586)">
        <path
          d="M25.533,12.766A12.766,12.766,0,0,0,12.4.005,12.912,12.912,0,0,0,0,12.7,12.76,12.76,0,0,0,9.529,25.1,15.519,15.519,0,0,1,0,28.369V38.3H0A25.533,25.533,0,0,0,25.533,12.766Z"
          transform="translate(602.91 57.588)"
        />
        <path
          d="M25.533,12.766A12.766,12.766,0,0,0,12.4.005,12.912,12.912,0,0,0,0,12.7,12.76,12.76,0,0,0,9.529,25.1,15.519,15.519,0,0,1,0,28.369V38.3H0A25.533,25.533,0,0,0,25.533,12.766Z"
          transform="translate(633.378 57.588)"
        />
      </g>
    </svg>
  );
};
