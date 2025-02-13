import React from 'react'
import './CommonBtn.css'

export const CommonBtn = ({btnContent, btnColors}) => {
  return (
    <>
        <button className={`CmnBtnCss ${btnColors}`}>{btnContent}</button>
    </>
  )
}
