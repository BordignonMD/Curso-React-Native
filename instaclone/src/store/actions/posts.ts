import { setMessage } from './message';
import { SET_POSTS, ADD_COMMENT, CREATING_POST, POST_CREATED } from './actionTypes'
import axios from 'axios'

export const addPost = post => {
  return (dispatch, getState) => {
    dispatch(creatingPost())
    axios.post(`/posts.json?auth=${getState().user.token}`, { ...post })
      .catch(err => {
        dispatch(setMessage({
          title: 'Erro',
          text: err
        }))
      })
      .then(res => {
        dispatch(fetchPosts())
        dispatch(postCreated())
      })
  }
}

export const addComment = payload => {
  return (dispatch, getState) => {
    axios.get(`/posts/${payload.postId}.json`)
      .catch(err => {
        dispatch(setMessage({
          title: 'Erro',
          text: err
        }))
      })
      .then(res => {
        const comments = res.data.comments || []
        comments.push(payload.comment)
        axios.patch(`/posts/${payload.postId}.json?auth=${getState().user.token}`, { comments })
          .catch(() => {
            dispatch(setMessage({
              title: 'Erro',
              text: 'Não foi possível adicionar seu comentário. Tente novamente!'
            }))
          })
          .then(res => {
            dispatch(fetchPosts())
          })
      })
  }
}

export const setPosts = posts => {
  return {
    type: SET_POSTS,
    payload: posts
  }
}

export const fetchPosts = () => {
  return dispatch => {
    axios.get('/posts.json')
      .catch(() => {
        dispatch(setMessage({
          title: 'Erro',
          text: 'Não foi possível carregar seu feed. Tente novamente!'
        }))
      })
      .then(res => {
        const rawPosts = res.data
        const posts = []
        for (let key in rawPosts) {
          posts.push({
            ...rawPosts[key],
            id: key
          })
        }

        dispatch(setPosts(posts.reverse()))
      })
  }
}

export const creatingPost = () => {
  return {
    type: CREATING_POST
  }
}

export const postCreated = () => {
  return {
    type: POST_CREATED
  }
}