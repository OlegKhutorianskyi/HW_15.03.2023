import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePostAction } from '../../store/reducers/postsReducer';
import s from './style.module.css'
const PostItem = ({id, title, description}) => {
    const dispatch = useDispatch();
  return (
    <div className={s.item}>
        <div className={s.postText}>
            <p>{title}</p>
            <p>{description}</p>
        </div>
        <button onClick={() => dispatch(deletePostAction(id))}>Delete</button>
    </div>
  )
}

export default PostItem