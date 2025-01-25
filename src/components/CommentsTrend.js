"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", comments: 220 },
  { name: "Feb", comments: 280 },
  { name: "Mar", comments: 250 },
  { name: "Apr", comments: 300 },
  { name: "May", comments: 280 },
  { name: "Jun", comments: 320 },
  { name: "Jul", comments: 380 },
  { name: "Aug", comments: 350 },
  { name: "Sep", comments: 400 },
  { name: "Oct", comments: 420 },
  { name: "Nov", comments: 450 },
  { name: "Dec", comments: 500 },
]

export function CommentsTrend() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
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
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="comments" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

