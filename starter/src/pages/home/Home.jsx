import React from 'react'
import './Home.css'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
const home = () => {
  return (
    <div className="Home">
      <ProfileSide/>
      <div className="postSide">Posts</div>
      <div className="rightSide">Rightside</div>
    </div>
  )
}

export default home
