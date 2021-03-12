import React from 'react';
import './HealthBar.css'

export default function HealthBar(props) {
  const { bgColor, healthRemaining } = props;
  return (
    <div className='container'>
      <div className='filler'>
        <span className='label'>{`${healthRemaining}`}</span>
      </div>
    </div>
  )
}