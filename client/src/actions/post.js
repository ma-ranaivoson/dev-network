import axios from 'axios';
import { setAlert } from './alert';
import {
    ADD_POST,
    DELETE_POST,
    GET_POST,
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
} from './types';

// get Posts
export const getPosts = () => async (dispatch) => {
    try {
        const res = await axios.get('/api/posts');
        dispatch({
            type: GET_POSTS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response, status: err.status },
        });
    }
};

// add Like
export const addLike = (postId) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/posts/like/${postId}`);
        dispatch({
            type: UPDATE_LIKES,
            payload: { id: postId, likes: res.data },
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response, status: err.status },
        });
    }
};

// remove Like
export const removeLike = (postId) => async (dispatch) => {
    try {
        const res = await axios.put(`/api/posts/unlike/${postId}`);
        dispatch({
            type: UPDATE_LIKES,
            payload: { id: postId, likes: res.data },
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response, status: err.status },
        });
    }
};

// delete post
export const deletePost = (postId) => async (dispatch) => {
    try {
        console.log(postId);
        const res = await axios.delete(`/api/posts/${postId}`);
        dispatch({
            type: DELETE_POST,
            payload: { _id: postId },
        });
        dispatch(setAlert('Post removed', 'success'));
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response, status: err.status },
        });
    }
};

//add post
export const addPost = (formData) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const res = await axios.post(`/api/posts`, formData, config);
        dispatch({
            type: ADD_POST,
            payload: res.data,
        });
        dispatch(setAlert('Post created', 'success'));
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response, status: err.status },
        });
    }
};

// get Post
export const getPost = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/api/posts/${id}`);
        dispatch({
            type: GET_POST,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: { msg: err.response, status: err.status },
        });
    }
};
