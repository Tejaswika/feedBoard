import React from "react";
import profileIcon from "./assets/Images/profile-icon.png";
import dots from "./assets/Images/dots.png";
import likeIcon from "./assets/Images/like-icon.png";
import commentIcon from "./assets/Images/comment-icon.png";
function PostBlockThree() {
  return (
    <div class='block block-3'>
      <div class='head-block'>
        <img src={profileIcon} alt='' class='profile-icon' />
        <p class='head-head'>
          LOREM IPSUM <br />
          <span className='mkbspan'> 1 day ago </span>
        </p>
        <img src={dots} alt='' class='dots' />
      </div>
      <div class='document-div'>
        <p className='addpara'>DOCUMENT</p>
      </div>
      <div class='block-content'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
        molestias laboriosam, quaerat est doloribus architecto consectetur nobis
        quod quia aut magni assumenda dolores? Eligendi delectus doloremque, sed
        obcaecati illum est?
      </div>
      <div class='block-bottom'>
        <img src={likeIcon} alt='' class='like' />
        <p class='textl'>13K likes</p>
        <img src={commentIcon} alt='' class='comment' />
        <p class='textl'>680 comments</p>
      </div>
    </div>
  );
}

export default PostBlockThree;
