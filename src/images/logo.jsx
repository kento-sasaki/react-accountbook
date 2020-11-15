import React from 'react';

export const LogoIcon = () => {
  const l = 33;
  const w = l / 13;
  const r1 = (l / 2) * 0.9;
  const x1 = l / 2;
  const y1 = l / 2 - r1;
  const xRad = (n, r, x) => x + r * Math.sin(2 * Math.PI * n);
  const yRad = (n, r, y) => y + r - r * Math.cos(2 * Math.PI * n);

  const mainColor = '#00b5ad';
  const lightColor = '#e9f9f6';

  const func = (y) => {
    const a = (xRad(0, r1, x1) - xRad(4 / 7, r1, x1)) / (yRad(0, r1, y1) - yRad(4 / 7, r1, y1));

    return {
      x: a * (y - yRad(0, r1, y1)) + xRad(0, r1, x1),
      y,
    };
  };

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width={l * 2} height={l} viewBox={`0 0 ${l} ${l}`}>
        <circle cx={l / 2} cy={l / 2} r={l / 2} fill="white" />
        <polygon
          points={`
            ${xRad(0, r1, x1)} ${yRad(0, r1, y1)},
            ${xRad(1 / 7, r1, x1)} ${yRad(1 / 7, r1, y1)},
            ${xRad(2 / 7, r1, x1)} ${yRad(2 / 7, r1, y1)},
            ${xRad(3 / 7, r1, x1)} ${yRad(3 / 7, r1, y1)},
            ${xRad(4 / 7, r1, x1)} ${yRad(4 / 7, r1, y1)},
            ${xRad(5 / 7, r1, x1)} ${yRad(5 / 7, r1, y1)},
            ${xRad(6 / 7, r1, x1)} ${yRad(6 / 7, r1, y1)},
          `}
          strokeWidth={w}
          strokeLinejoin="round"
          stroke={mainColor}
          fill={lightColor}
        />
        <polyline
          points={`
            ${xRad(0, r1, x1)} ${yRad(0, r1, y1)},
            ${xRad(4 / 7, r1, x1)} ${yRad(4 / 7, r1, y1)},
            ${xRad(6 / 7, r1, x1)} ${yRad(6 / 7, r1, y1)},
            ${xRad(0, r1, x1)} ${yRad(0, r1, y1)},
          `}
          strokeWidth={w}
          strokeLinejoin="round"
          stroke={mainColor}
          fill={lightColor}
        />
        <polyline
          points={`
            ${xRad(1 / 7, r1, x1)} ${yRad(1 / 7, r1, y1)},
            ${func((l * 2) / 5).x} ${func((l * 2) / 5).y}
            ${xRad(2 / 7, r1, x1)} ${yRad(2 / 7, r1, y1)},
            ${xRad(1 / 7, r1, x1)} ${yRad(1 / 7, r1, y1)},
          `}
          strokeWidth={w}
          strokeLinejoin="round"
          stroke={mainColor}
          fill={lightColor}
        />
      </svg>
    </>
  );
};
