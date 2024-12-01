import React from 'react'
import PostSide from '../PostSide/PostSide'
import ProfileLeft from '../ProfileLeft/ProfileLeft'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
const ProfileSide = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>

        <div className="Profile-center">
            <ProfileCard/>
            <PostSide/>
        </div>
    </div>
    )
}

export default ProfileSide