import React from 'react'
import './Home.css'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
const home = () => {
  return (
    <div className="Home">
      <ProfileSide/>
      <PostSide/>
      <div className="postSide">Posts</div>
      <div className="rightSide">Rightside</div>
    </div>
  )
}

export default home
