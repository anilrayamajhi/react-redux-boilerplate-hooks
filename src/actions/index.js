import axios from 'axios';
import { GET_POSTS } from './types';

const BASE_URL = 'https://gilog.herokuapp.com/api';

export const getPosts = (dispatch) => {
  console.log('A: ', {dispatch});
  
    axios({
        url: `/posts`,
        baseURL: BASE_URL,
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          dispatch ({
            type: GET_POSTS,
            payload: response.data,
            loading: false
          })
        })
        .catch(err => {
          console.log('Fallacy: ', err)
        })
  }

//   export const fetchBlog = (postId) => {
//     const request = axios.get(`${BASE_URL}/posts/${postId}`)
//     dispatch({
//       type: GET_POST,
//       payload: request
//     })
//   }