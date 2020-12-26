const INITIAL_STATE = {
    books: null
};

const bookReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_BOOK':
            return {
                ...state,
                books: action.payload
            }
        default:
            return state;
    }
}

export default bookReducer;