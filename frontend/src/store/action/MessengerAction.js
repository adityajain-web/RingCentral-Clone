import axios from "axios";
import { FRIENDS_GET_SUCCESS } from "../types/messengerType";
export const getFriends = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/messenger/get-friends');
        dispatch({
            type: FRIENDS_GET_SUCCESS,
            payload: {
                friends: response.data.friends,
            }

        })
    } catch (error) {
        console.error("getFriends Error", error.response.data)
    }
}