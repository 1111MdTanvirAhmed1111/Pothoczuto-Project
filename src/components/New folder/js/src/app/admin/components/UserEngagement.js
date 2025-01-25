"use client";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
const data = [
    { name: "Likes", total: 1200 },
    { name: "Comments", total: 900 },
    { name: "Shares", total: 300 },
    { name: "Bookmarks", total: 500 },
];
export function UserEngagement() {
    return (<ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false}/>
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`}/>
        <Tooltip />
        <Bar dataKey="total" fill="#8884d8" radius={[4, 4, 0, 0]}/>
      </BarChart>
    </ResponsiveContainer>);
}
