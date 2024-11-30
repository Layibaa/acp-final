import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'

const profileSide = () => {
  return (
    <div>
      <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
      </div>
    </div>
  )
}

export default profileSide
