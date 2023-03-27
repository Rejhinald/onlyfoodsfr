import {
    THEME_LIST_FAIL,
    THEME_LIST_REQUEST,
    THEME_LIST_SUCCESS,

    THEME_DETAILS_FAIL,
    THEME_DETAILS_REQUEST,
    THEME_DETAILS_SUCCESS,


    THEME_EDIT_REQUEST,
    THEME_EDIT_SUCCESS,
    THEME_EDIT_FAIL,
    THEME_EDIT_RESET,


    THEME_DELETE_REQUEST,
    THEME_DELETE_SUCCESS,
    THEME_DELETE_FAIL,

} from "../Constants/themeConstants";

export const themeListReducer = (state = { themes: [] }, action) => {
    switch (action.type) {
        case THEME_LIST_REQUEST:
            return { loading: true, themes: [] };
        case THEME_LIST_SUCCESS:
            return { loading: false, themes: action.payload };
        case THEME_LIST_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const themeDetailsReducer = (state = { theme: [] }, action) => {
    switch (action.type) {
        case THEME_DETAILS_REQUEST:
            return { loading: true, ...state };
        case THEME_DETAILS_SUCCESS:
            return { loading: false, theme: action.payload };
        case THEME_DETAILS_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const themeDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case THEME_DELETE_REQUEST:
            return { loading: true }

        case THEME_DELETE_SUCCESS:
            return { loading: false, success: true }

        case THEME_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const themeEditReducer = (state = { theme: {} }, action) => {
    switch (action.type) {
        case THEME_EDIT_REQUEST:
            return { loading: true }

        case THEME_EDIT_SUCCESS:
            return { loading: false, success: true, theme: action.payload }

        case THEME_EDIT_FAIL:
            return { loading: false, error: action.payload }

        case THEME_EDIT_RESET:
            return { theme: {} }

        default:
            return state
    }
}