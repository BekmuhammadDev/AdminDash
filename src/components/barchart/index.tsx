import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Yanvar", uv: 0 },
  { name: "Fevral", uv: 300 },
  { name: "Mart", uv: 200 },
  { name: "Aprel", uv: 600 },
  { name: "May", uv: 300 },
  { name: "Iyun", uv: 400 },
  { name: "Iyul", uv: 500 },
  { name: "Avgust", uv: 400 },
  { name: "Sentyabr", uv: 750 },
  { name: "Oktyabr", uv: 700 },
  { name: "Noyabr", uv: 800 },
  { name: "Dekabr", uv: 700 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "white", padding: 10, borderRadius: 5, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <p style={{ fontSize: 14, fontWeight: "bold", color: "#555" }}>{payload[0].payload.name}</p>
        <p style={{ fontSize: 12, color: "#888" }}>Qiymat: {payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const BeautifulChart: React.FC = () => {
  return (
    <div style={{ width: "100%", height: 850, background: "white", padding: 20, borderRadius: 10, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}>
      <h3 style={{ textAlign: "center", color: "#333" }}>SELL PRODUCT</h3>
      <ResponsiveContainer width="100%" height={700}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" tick={{ fill: "#888" }} />
          <YAxis tick={{ fill: "#888" }} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BeautifulChart;
