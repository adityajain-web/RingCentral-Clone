import { FRIENDS_GET_SUCCESS, MESSAGE_GET_SUCCESS, MESSAGE_SEND_SUCCESS } from "../types/messengerType";
const messengerState = {
    friends: [],
    message: []
}

export const messengerReducer = (state = messengerState, action) => {
    const { type, payload } = action;

    if (type === FRIENDS_GET_SUCCESS) {
        return {
            ...state,
            friends: payload.friends
        }
    }

    if (type === MESSAGE_GET_SUCCESS) {
        return {
            ...state,
            message: payload.message
        }
    }

    if (type === MESSAGE_SEND_SUCCESS) {
        return {
            ...state,
            message: [...state.message, payload.message]
        }
    }

<<<<<<< HEAD
<<<<<<< HEAD
    if (type === IMAGE_MESSAGE_SEND) {
        return {
            ...state,
            message: [...state.message, payload.message]
        }
    }

    if (type === "SOCKET_MESSAGE") {
        return {
            ...state,
            message: [...state.message, payload.message]
        }
    }

=======
>>>>>>> parent of 840d0e8 (last update 220120221814)
=======
>>>>>>> parent of 840d0e8 (last update 220120221814)
    return state
}