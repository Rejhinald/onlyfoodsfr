import {
    THEME_LIST_REQUEST,
    THEME_LIST_SUCCESS,
    THEME_LIST_FAIL,

    THEME_DETAILS_REQUEST,
    THEME_DETAILS_SUCCESS,
    THEME_DETAILS_FAIL,

    THEME_ADD_REQUEST,
    THEME_ADD_SUCCESS,
    THEME_ADD_FAIL,

    THEME_EDIT_REQUEST,
    THEME_EDIT_SUCCESS,
    THEME_EDIT_FAIL,

    THEME_DELETE_REQUEST,
    THEME_DELETE_SUCCESS,
    THEME_DELETE_FAIL,

} from "../Constants/themeConstants";
import axios from 'axios';

export const addTheme = (theme) => async (dispatch) => {
    try {
        dispatch({
            type: THEME_ADD_REQUEST,
        });

        const { data } = await axios.post('https://rejhinald.pythonanywhere.com/api/themes/create', theme);

        dispatch({
            type: THEME_ADD_SUCCESS,
            payload: data,
        });
    }
    catch (error) {
        dispatch({
            type: THEME_ADD_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const deleteTheme = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: THEME_DELETE_REQUEST
        })

        const { data } = await axios.delete(
            `https://rejhinald.pythonanywhere.com/api/themes/delete/${id}/`,
        )

        dispatch({
            type: THEME_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: THEME_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const editTheme = (id, theme) => async (dispatch, getState) => {
    try {
        dispatch({
            type: THEME_EDIT_REQUEST,
        });

        const { data } = await axios.put(`https://rejhinald.pythonanywhere.com/api/themes/update/${id}/`, theme)

        dispatch({
            type: THEME_EDIT_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: THEME_EDIT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

// export function getTHEME() {
//     return axios.get('http://127.0.0.1:8000/THEME/')
//         .then(res => {
//             return res.data
//         })
// }

export const listThemes = () => async (dispatch) => {
    try {
        dispatch({
            type: THEME_LIST_REQUEST,
        });

        const { data } = await axios.get('https://rejhinald.pythonanywhere.com/api/themes');

        dispatch({
            type: THEME_LIST_SUCCESS,
            payload: data,
        });
    }
    catch (error) {
        dispatch({
            type: THEME_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const listThemeDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: THEME_DETAILS_REQUEST,
        });

        const { data } = await axios.get(`https://rejhinald.pythonanywhere.com/api/themes/`);

        dispatch({
            type: THEME_DETAILS_SUCCESS,
            payload: data,
        });
    }
    catch (error) {
        dispatch({
            type: THEME_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}

export const listTheme1 = (id) => async (dispatch) => {
    try {
        dispatch({
            type: THEME_DETAILS_REQUEST,
        });

        const { data } = await axios.get(`https://rejhinald.pythonanywhere.com/api/themes/3`);

        dispatch({
            type: THEME_DETAILS_SUCCESS,
            payload: data,
        });
    }
    catch (error) {
        dispatch({
            type: THEME_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}