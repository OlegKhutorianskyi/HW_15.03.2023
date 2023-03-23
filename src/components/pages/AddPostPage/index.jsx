import React from 'react'
import { useDispatch } from 'react-redux'
import { addPostAction } from '../../../store/reducers/postsReducer';
import s from './style.module.css'

const AddPostPage = () => {

    const dispatch = useDispatch();

    const submit = e => {
        e.preventDefault()
        const {title, id, description} = e.target;

        dispatch(addPostAction(title.value, id.value, description.value));

        title.value = '';
        id.value = '';
        description.value = '';
    }


  return (
    <div className={s.container}>
        <h1>Add new post</h1>
        <form className={s.form} onSubmit={submit}> 
            <div className={s.inputs}>
                <input type="text" name='title' placeholder='Title...'/>
                <input type="number" name="id" id="id" placeholder='Id...'/>
                <button>Add</button>
            </div>
            <input type="text" name='description' id="description" placeholder='Description post' className={s.descrInput}/>
        </form>
    </div>
  )
}

export default AddPostPage