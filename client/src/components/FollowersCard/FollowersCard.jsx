import React from 'react';
import './FollowersCard.css';
import Followers from '../../Data/FollowersData'; 

const defaultFollowers = [
  { name: "John Doe", username: "johndoe", img: "https://via.placeholder.com/150" },
  { name: "Jane Smith", username: "janesmith", img: "https://via.placeholder.com/150" },
];

const FollowersCard = () => {
  const followersData = Array.isArray(Followers) && Followers.length > 0 ? Followers : defaultFollowers;

  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>

      {followersData.map((follower, id) => (
        <div className="follower" key={id}>
          <div>
            <img src={follower.img} alt={follower.name} className='followerImage' />
            <div className="name">
              <span>{follower.name}</span>
              <span>@{follower.username}</span>
            </div>
          </div>
          <button className='button fc-button'>Follow</button>
        </div>
      ))}
    </div>
  );
};

export default FollowersCard;
