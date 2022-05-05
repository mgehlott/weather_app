import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs';
import './SingleComment.css';

const SingleComment = ({ comment }) => {
    return (
        <div className='singleComment'>
            <BsFillPersonFill />
            <p>{comment}</p>
        </div>
    )
}

export default SingleComment
