const initialState = {
  comments: [],
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload.comment],
      };

    // case "DELETE_COMMENT":
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
}

export default appReducer;
