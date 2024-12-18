const authReducer = (
  state = { authData: null, loading: false, error: false, updateLoading: false },
  action
) => {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true, error: false };
    case "AUTH_SUCCESS":
      // Store user data in localStorage for persistence
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: false };
    case "AUTH_FAIL":
      return { ...state, loading: false, error: true };
    case "LOG_OUT":
      localStorage.clear();
      return { authData: null, loading: false, error: false, updateLoading: false };
    default:
      return state;
  }
};

export default authReducer;
