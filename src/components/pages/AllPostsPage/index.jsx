import React from 'react'
import { useSelector } from 'react-redux'
import PostItem from '../../PostItem';
import s from './style.module.css'




const AllPostsPage = () => {
  const posts = useSelector(state => state);
  return (
    <div className={s.container}>
        {
          posts.map(item => <PostItem key={item.id} {...item}/>)
        }
    </div>
  )
}

export default AllPostsPage