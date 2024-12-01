import React from 'react';
import './Post.css';
import Comment from '../../img/comment.png';
import Share from '../../img/share.png';
import Heart from '../../img/like.png';
import NotLike from '../../img/notlike.png';

const defaultPost = {
  img: "https://via.placeholder.com/500",
  name: "Sample User",
  desc: "This is a sample post description",
  likes: 0,
  liked: false,
};

const Post = ({ data = defaultPost }) => {
  const { img, liked, likes, name, desc } = data;

  return (
    <div className="Post">
      <img src={img} alt={name} />

      <div className="postReact">
        <img src={liked ? Heart : NotLike} alt="Like" />
        <img src={Comment} alt="Comment" />
        <img src={Share} alt="Share" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: '12px' }}>{likes} likes</span>

      <div className="detail">
        <span><b>{name}</b></span>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default Post;
