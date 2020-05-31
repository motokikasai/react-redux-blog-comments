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

    default:
      return state;
  }
}

export default appReducer;
