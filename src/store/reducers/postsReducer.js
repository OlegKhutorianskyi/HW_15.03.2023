const posts = [
    {
        id: 1,
        title: 'Title post',
        description: 'Description post'
    },
    {
        id: 2,
        title: 'Title post - 2',
        description: 'Description post - 2'
    },
    {
        id: 3,
        title: 'Title post - 3',
        description: 'Description post - 3'
    },
]

const DELETE = 'DELETE_POST'
const ADD = 'ADD_POST'

export const addPostAction = (title, id, description) => {
    return {
        type: ADD,
        payload: {id, title, description}
    }
}
export const deletePostAction = (payload) => ({type: DELETE, payload})

export const postsReducer = (state = posts, action) => {
    if (action.type === DELETE) {

        return state.filter(({id}) => id !== action.payload)
    } else if (action.type === ADD) {
        console.log(action.payload)
        return [...state, action.payload]
    }
    return state
}