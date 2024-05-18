import React, { useContext, useState } from 'react'
import { NavBtnContext} from '../../contexts/NavBtnContext'

function NavBtn() {
  const { statusBtnNav, setStatusBtnNav } = useContext(NavBtnContext)

  const checkActivity = () => {
    setStatusBtnNav(statusBtnNav => !statusBtnNav)
  }

  return (
    <div className='nav-btn' onClick={() => checkActivity()}>
      <div className={`icon-btn ${statusBtnNav ? 'active' : ''}`}></div>
    </div>
  )
}

export default NavBtn