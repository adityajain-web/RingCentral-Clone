import { REGISTER_FAIL, REGISTER_SUCCESS } from "../types/authType";
import deCodeToken from 'jwt-decode'

const authState = {
    loading: true,
    authenticate: false,
    error: "",
    successMessage: "",
    myInfo:""
}

const tokenDecode = (token) =>{
const tokenDecoded = deCodeToken(token)
}

export const authReducer = (state = authState, action) => {
    const { payload, type } = action;
    if (type === REGISTER_FAIL) {
        const myInfo = tokenDecode()
    }

    if (type === REGISTER_SUCCESS) {
        return {
            ...state,
            success: payload.successMessage
        }
    }

    return state;
}