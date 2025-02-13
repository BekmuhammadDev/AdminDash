import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Yanvar", uv: 400 },
  { name: "Fevral", uv: 600 },
  { name: "Mart", uv: 800 },
  { name: "Aprel", uv: 700 },
  { name: "May", uv: 900 },
  { name: "Iyun", uv: 1000 },
  { name: "Iyul", uv: 800 },
  { name: "Avgust", uv: 700 },
  { name: "Sentyabr", uv: 650 },
  { name: "Oktyabr", uv: 900 },
  { name: "Noyabr", uv: 1000 },
  { name: "Dekabr", uv: 500 },
];

const MyBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="50%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart;
