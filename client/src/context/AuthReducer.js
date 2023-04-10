const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        usuario: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        usuario: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        usuario: null,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
