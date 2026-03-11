import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: string;
  letterSpacing?: number;
  fillColor?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 32,
  fontWeight = 'bold',
  letterSpacing = 0,
  fillColor = '#000000',
}) => {
  const textLength = text.length;
  const charWidth = fontSize * 0.6;
  const totalWidth = textLength * charWidth + letterSpacing * (textLength - 1);
  const padding = 20;
  const width = totalWidth + padding * 2;
  const height = fontSize + padding * 2;

  let xPosition = padding;
  const yPosition = padding + fontSize * 0.75;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x={xPosition}
        y={yPosition}
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={fillColor}
        letterSpacing={letterSpacing}
        textAnchor="start"
        dominantBaseline="middle"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
