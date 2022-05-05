import React, { useRef } from 'react'
import './comments.css';
import { useState } from 'react';
import SingleComment from './SingleComment';

const Comments = () => {

  const [commentCount, setCommentCount] = useState(0);
  const [comments, setComments] = useState([]);
  const commentRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const comment = commentRef.current.value;
    setComments(pre => {
      return [...pre, comment];
    });
    setCommentCount(comments.length);
  }

  return (
    <div className='comment-container'>
      <form className='comment-form' onSubmit={submitHandler}>
        <div className='input-control'>
          <textarea className='cinput' rows="2" cols='50' placeholder='Enter your comment here...' ref={commentRef} />
        </div>
        <button className='commentBtn'>Comment</button>

      </form>

      <div className='comments'>
        <h2>Comments ({commentCount})</h2>
        {comments.map((item) => {
          return <SingleComment comment={item} />
        })}
      </div>


    </div>
  )
}

export default Comments
