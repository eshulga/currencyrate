import React from 'react'
import PropTypes from 'prop-types'

import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import CustomizedAxisTick from './components/CustomizedAxisTick'

const MinLineChart = props => {
  const { data, XAxistInterval, dataKey, ...rest } = props

  return (
    <LineChart
      data={data}
      margin={{
        top: 24,
        right: 16,
        left: 16,
        bottom: 5
      }}
      {...rest}
    >
      <XAxis
        dataKey="name"
        height={60}
        interval={XAxistInterval}
        tick={<CustomizedAxisTick />}
        scale="auto"
      />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        dot={false}
        type="monotone"
        dataKey={dataKey}
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  )
}

MinLineChart.propTypes = {
  data: PropTypes.array,
  XAxistInterval: PropTypes.number,
  dataKey: PropTypes.string
}

export default MinLineChart
