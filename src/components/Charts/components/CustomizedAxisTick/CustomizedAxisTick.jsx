import React, { Component } from 'react'

class CustomizedAxisTick extends Component {
  render() {
    const { y, x, payload } = this.props

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#676"
          transform="rotate(-35)"
          fontSize="10px"
        >
          {payload.value}
        </text>
      </g>
    )
  }
}

export default CustomizedAxisTick
