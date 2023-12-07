import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer"
const INITIAL_STATE = {
    user: {
        _id: "64cd190b19ccbd34e5c98b59",
        username: "janvi123",
        email: "janvi123@gmail.com",
        profilePicture: "",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        followings: []
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}>
            {children}
        </AuthContext.Provider>
    )
}


