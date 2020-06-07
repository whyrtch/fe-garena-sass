import GLOBAL from '../utils/GLOBAL'

const appState = {
    listContent: {
        contents: [],
    },
    listUniversity: {
        universities: [],
    },
    listFaculty: {
        faculties: [],
    },
    listTestimony: {
        testimonials: [],
    },
    isFecthing: true
}

const app = (state = {...appState}, action) => {
    switch(action.type) {
        case GLOBAL.REQUEST_GET_CONTENTS:
            return {
                ...state,
                listContent: {
                    ...state.listContent,
                }
            }
        case GLOBAL.RECEIVE_GET_CONTENTS:
            return {
                ...state,
                listContent: {
                    contents: action.payload,
                },
                isFecthing: false
            }
        case GLOBAL.REQUEST_GET_UNIVERSITY:
            return {
                ...state,
                listUniversity: {
                    ...state.listUniversity,
                }
            }
        case GLOBAL.RECEIVE_GET_UNIVERSITY:
            return {
                ...state,
                listUniversity: {
                    universities: action.payload,
                },
                isFecthing: false
            }
        case GLOBAL.REQUEST_GET_FACULTY:
            return {
                ...state,
                listFaculty: {
                    ...state.listFaculty,
                }
            }
        case GLOBAL.RECEIVE_GET_FACULTY:
            return {
                ...state,
                listFaculty: {
                    faculties: action.payload,
                },
                isFecthing: false
            }
        case GLOBAL.REQUEST_GET_TESTIMONY:
            return {
                ...state,
                listTestimony: {
                    ...state.listTestimony,
                }
            }
        case GLOBAL.RECEIVE_GET_TESTIMONY:
            return {
                ...state,
                listTestimony: {
                    testimonials: action.payload,
                },
                isFecthing: false
            }


        case GLOBAL.INVALIDATE_GET_DATA:
            return {
                ...state,
                isFecthing: true
            }
        default:
            return state
    }
}

export default app;