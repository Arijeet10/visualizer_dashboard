"use client";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const CountryChart = ({data}) => {
  console.log(data.country);
  return (
    <>
    <div>Visualizing the data for the country: {data.country}</div>
    {/* visualizing intensity,likelihood and relevance in charts with respect to Country filter */}
    <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="" />
          <YAxis dataKey="intensity" />
          <Tooltip />
          <Legend />
          <Bar dataKey="intensity" stackId="a" fill="#db9f63" />
          <Bar dataKey="likelihood" stackId="a" fill="#87db63" />
          <Bar dataKey="relevance" stackId="a" fill="#63b3db" />
        </BarChart>
    </>
  )
}

export default CountryChart