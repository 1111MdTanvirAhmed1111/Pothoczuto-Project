'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Jan", total: Math.floor(Math.random() * 50000) + 10000 },
  { name: "Feb", total: Math.floor(Math.random() * 50000) + 10000 },
  { name: "Mar", total: Math.floor(Math.random() * 50000) + 10000 },
  { name: "Apr", total: Math.floor(Math.random() * 50000) + 10000 },
  { name: "May", total: Math.floor(Math.random() * 50000) + 10000 },
  { name: "Jun", total: Math.floor(Math.random() * 50000) + 10000 },
  { name: "Jul", total: Math.floor(Math.random() * 50000) + 10000 },
  { name: "Aug", total: Math.floor(Math.random() * 50000) + 10000 },
  { name: "Sep", total: Math.floor(Math.random() * 50000) + 10000 },
  { name: "Oct", total: Math.floor(Math.random() * 50000) + 10000 },
  { name: "Nov", total: Math.floor(Math.random() * 50000) + 10000 },
  { name: "Dec", total: Math.floor(Math.random() * 50000) + 10000 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value.toLocaleString()}`}
        />
        <Tooltip
          contentStyle={{ background: "#333", border: "none" }}
          labelStyle={{ color: "#fff" }}
          formatter={(value) => [value.toLocaleString(), "Views"]}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

