import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Suhel", sales: 500 },
  { name: "Shubham", sales: 1000 },
  { name: "Singh", sales: 2000 },
  { name: "Aman", sales: 1200 },
  { name: "Rahul", sales: 800 },
  { name: "Zaid", sales: 1500 },
  { name: "Imran", sales: 950 },
];

const COLORS = [
  "#FF8C00", "#FFA500", "#FFB732", "#FFC84A",
  "#FFD966", "#FFAA1A", "#FF9500",
];





const total = data.reduce((sum, d) => sum + d.sales, 0);

const CustomTooltipBar = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: "#1a1a2e",
        border: "1px solid #FFA500",
        borderRadius: 8,
        padding: "8px 14px",
        fontSize: 13,
        color: "#fff",
      }}>
        <p style={{ margin: 0, fontWeight: 600, color: "#FFA500" }}>{label}</p>
        <p style={{ margin: "4px 0 0", color: "#fff" }}>Sales: <strong>{payload[0].value.toLocaleString()}</strong></p>
      </div>
    );
  }
  return null;
};

const CustomTooltipPie = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const pct = ((payload[0].value / total) * 100).toFixed(1);
    return (
      <div style={{
        background: "#1a1a2e",
        border: "1px solid #FFA500",
        borderRadius: 8,
        padding: "8px 14px",
        fontSize: 13,
        color: "#fff",
      }}>
        <p style={{ margin: 0, fontWeight: 600, color: "#FFA500" }}>{payload[0].name}</p>
        <p style={{ margin: "4px 0 0" }}>Sales: <strong>{payload[0].value.toLocaleString()}</strong></p>
        <p style={{ margin: "2px 0 0", color: "#ccc" }}>Share: {pct}%</p>
      </div>
    );
  }
  return null;
};

const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  if (percent < 0.06) return null;
  const RADIAN = Math.PI / 180;
  const r = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + r * Math.cos(-midAngle * RADIAN);
  const y = cy + r * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="#fff" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight={600}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function SalesCharts() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div style={{
      fontFamily: "'DM Sans', sans-serif",
      background: "#f8f7f4",
      minHeight: "100vh",
      padding: "32px 24px",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <h2 style={{
        fontSize: 22,
        fontWeight: 700,
        color: "#1a1a2e",
        margin: "0 0 4px",
        letterSpacing: "-0.5px",
      }}>
        Sales Dashboard
      </h2>
      <p style={{ fontSize: 14, color: "#888", margin: "0 0 32px" }}>
        Individual sales performance overview
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24,
      }}>

        {/* Bar Chart Card */}
        <div style={{
          background: "#fff",
          borderRadius: 16,
          padding: "24px 20px 16px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          border: "1px solid #f0ede8",
        }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#888", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: 1 }}>
            Sales by Person
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data} barCategoryGap="30%" barGap={4}>
              <CartesianGrid strokeDasharray="4 4" stroke="#f0ede8" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: "#999" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#999" }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `${v}`}
                domain={[0, 2200]}
              />
              <Tooltip content={<CustomTooltipBar />} cursor={{ fill: "rgba(255,165,0,0.08)" }} />
              <Bar
                dataKey="sales"
                fill="#FFA500"
                radius={[6, 6, 0, 0]}
                maxBarSize={42}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart Card */}
        <div style={{
          background: "#fff",
          borderRadius: 16,
          padding: "24px 20px 16px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
          border: "1px solid #f0ede8",
        }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#888", margin: "0 0 16px", textTransform: "uppercase", letterSpacing: 1 }}>
            Sales Distribution
          </p>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={110}
                innerRadius={40}
                dataKey="sales"
                nameKey="name"
                labelLine={false}
                label={renderCustomLabel}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    opacity={activeIndex === null || activeIndex === index ? 1 : 0.55}
                    style={{ cursor: "pointer", transition: "opacity 0.2s" }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltipPie />} />
              <Legend
                iconType="circle"
                iconSize={8}
                formatter={(value) => (
                  <span style={{ fontSize: 12, color: "#555" }}>{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Summary row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 12,
        marginTop: 24,
      }}>
        {[
          { label: "Total Sales", value: total.toLocaleString() },
          { label: "Top Performer", value: "Singh" },
          { label: "Avg Sales", value: Math.round(total / data.length).toLocaleString() },
          { label: "Team Size", value: data.length },
        ].map((card) => (
          <div key={card.label} style={{
            background: "#fff",
            borderRadius: 12,
            padding: "14px 18px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            border: "1px solid #f0ede8",
          }}>
            <p style={{ fontSize: 12, color: "#aaa", margin: "0 0 4px", fontWeight: 500 }}>{card.label}</p>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#1a1a2e", margin: 0 }}>{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
