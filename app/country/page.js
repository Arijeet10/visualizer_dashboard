"use client";

import { getData } from "../data"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Country = () => {
    //get large data from api
    const {sample}= getData;
  return (
    <>
        <div>
            Country
        </div>

        {/* visualizing intensity,likelihood and relevance in charts with respect to Country filter */}
        <BarChart
          width={500}
          height={300}
          data={sample}
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

export default Country