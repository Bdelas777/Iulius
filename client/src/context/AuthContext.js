import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  usuario: {
    _id: "641f38e150d0f5a09ee3438b",
    username: "Bdelas",
    email: "bdelas@email.com",
    fotoPerfil: "users/2.jpeg",
    fotoCover: "",
    esAdmin: false,
    followers: [],
    followings: [],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        usuario: state.usuario,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
