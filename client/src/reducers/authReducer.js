const authReducer = (state = { authData: null, loading: false, error: false }, action) => {
  switch (action.type) {
    case "LOG_OUT":
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
