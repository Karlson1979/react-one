import React from 'react'

export const Options = ({updateFeedback,reset}) => {
    
  return (
    <div>
        <button type='button' onClick={()=>updateFeedback('good')}>Good</button>
        <button type='button' onClick={()=>updateFeedback('neutral')}>Neutral</button>
        <button type='button' onClick={()=>updateFeedback('bad')}>Bad</button>
        <button type='button' onClick={reset}>Reset</button>

    </div>
  )
}
