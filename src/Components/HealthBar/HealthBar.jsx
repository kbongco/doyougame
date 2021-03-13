import React from 'react';
import './HealthBar.css'

export default function HealthBar(props) {
  const { bgColor, healthRemaining } = props;
  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${healthRemaining}%`,
    backgroundColor: bgColor,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }
  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${healthRemaining}`}</span>
      </div>
    </div>
  )
}