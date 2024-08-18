import React from 'react'

export const Feedback = ({feedback,totalFeedback,positive}) => {
    console.log(feedback)
  return (
    <div>
        <p>good:{feedback.good}</p>
        <p>neutral:{feedback.neutral}</p>
        <p>bad:{feedback.bad}</p>
        <p>total:{totalFeedback}</p>
        <p>positive:{positive}%</p>


    </div>
  )
}
