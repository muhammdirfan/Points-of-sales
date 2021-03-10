const useReducer = (state = [], action) => {
  const { type, payload } = action;
  if (action.type === "add_user") {
    return {
      ...state,
      payload,
    };
  } else if (action.type === "delete_user") {
    return {
      ...state,
      payload,
    };
  } else if (action.type === "update_user") {
    return {
      ...state,
      payload,
    };
  } else if (action.type === "get_user") {
    return {
      ...state,
      payload,
    };
  }

  return state;
};

export default useReducer;
