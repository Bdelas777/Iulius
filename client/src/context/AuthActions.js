export const LoginStart = (usuarioCredencial) => ({ type: "LOGIN_START" });

export const LoginSuccess = (usuario) => ({
  type: "LOGIN_SUCCESS",
  payload: usuario,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});
