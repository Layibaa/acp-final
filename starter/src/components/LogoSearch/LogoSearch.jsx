import React from 'react'
import Logo from '../../img/logo.png'
const LogoSearch = () => {
  return (
    <div>
      <div className="LogoSearch">
        <img src={Logo} alt=""/>
        <div className="Search">
            <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
