import axios from 'axios';
import API from '../utils/API';
import GLOBAL from '../utils/GLOBAL';

export const getDataContents = () => {
    return (dispatch) => {
        dispatch({type : GLOBAL.REQUEST_GET_CONTENTS});
        axios.get(API.API_GET_CONTENTS)
        .then(res => {
            dispatch({
                type: GLOBAL.RECEIVE_GET_CONTENTS,
                payload: res.data.data[0]
            })
        })
        .catch(err => {
            dispatch({type: GLOBAL.INVALIDATE_GET_DATA});
            throw err;
        })
    }
};

export const getDataUniversty = () => {
    return (dispatch) => {
        dispatch({type: GLOBAL.REQUEST_GET_UNIVERSITY})
        axios.get(API.API_GET_UNIVERSITY)
        .then(res => {
            dispatch({
                type: GLOBAL.RECEIVE_GET_UNIVERSITY,
                payload: res.data.data
            })
        })
        .catch(err => {
            dispatch({type: GLOBAL.INVALIDATE_GET_DATA})
            throw err
        })
    }
}

export const getDataFaculty = () => {
    return (dispatch) => {
        dispatch({type: GLOBAL.REQUEST_GET_FACULTY})
        axios.get(API.API_GET_FACULTY)
        .then(res => {
            dispatch({
                type: GLOBAL.RECEIVE_GET_FACULTY,
                payload: res.data.data
            })
        })
        .catch(err => {
            dispatch({type: GLOBAL.INVALIDATE_GET_DATA})
            throw err
        })
    }
}

export const getDataTestimony = () => {
    return (dispatch) => {
        dispatch({type: GLOBAL.REQUEST_GET_TESTIMONY})
        axios.get(API.API_GET_TESTIMONY)
        .then(res => {
            dispatch({
                type: GLOBAL.RECEIVE_GET_TESTIMONY,
                payload: res.data.data
            })
        })
        .catch(err => {
            dispatch({type: GLOBAL.INVALIDATE_GET_DATA})
            throw err
        })
    }
}