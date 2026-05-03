import React, { useState } from 'react';
import { Tooltip, PieChart, Pie, Cell, Sector } from 'recharts';

const COLORS = [
  "#FF8C00", "#FFA500", "#FFB732", "#FFC84A",
  "#FFD966", "#FFAA1A", "#FF9500",
];

const data = [
  { st_name: 'Suhel', amount: 500 },
  { st_name: 'Mizan Khan', amount: 1000 },
  { st_name: 'Shubham Singh', amount: 2000 },
  { st_name: 'Aman', amount: 1200 },
  { st_name: 'Rahul', amount: 800 },
  { st_name: 'Zaid', amount: 1500 },
  { st_name: 'Imran', amount: 950 },
];

const Piechart = ({
  width = 400,
  height = 400,
  cx = '50%',
  cy = '50%',
  outerRadius = 110,
  innerRadius = 40,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        cx={cx}
        cy={cy}
        outerRadius={outerRadius}
        innerRadius={innerRadius}
        dataKey="amount"
        nameKey="st_name"
        stroke="none"
        label
        activeIndex={activeIndex}
        activeShape={({ outerRadius = 0, ...props }) => (
          <Sector {...props} outerRadius={outerRadius + 8} />
        )}
        onMouseEnter={(_, index) => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(null)}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default Piechart;