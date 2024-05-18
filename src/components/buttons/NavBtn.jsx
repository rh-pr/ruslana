import React, { useState } from 'react'

function NavBtn() {
  const [activeBtn, setActiveBtn] = useState(false)

  const checkActivity = () => {
    setActiveBtn(activeBtn => !activeBtn)
  }

  return (
    <div className='nav-btn' onClick={() => checkActivity()}>
      <div className={`icon-btn ${activeBtn ? 'active' : ''}`}></div>
    </div>
  )
}

export default NavBtn