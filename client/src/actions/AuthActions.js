// No authentication actions needed anymore.
export const logout = () => (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
