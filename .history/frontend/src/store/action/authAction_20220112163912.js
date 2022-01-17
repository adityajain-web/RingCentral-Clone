import axios from 'axios';
import { REGISTER_FAIL } from '../types/authType';

export const userRegister = (data) => {
    return async(dispatch) => {

const config = {
    Headers:{
        'Content-Type':'application/json'
    }
}

        try {
            const res = await axios.post('/api/messenger/user-register', data, config)
            localStorage.setItem('authToken', res.data.token)
            console.log(res.data)
        } catch (error) {
            console.error("Dispatch Error", error.response.data);
            dispatch({
                type: REGISTER_FAIL,
                payload:{
                    error: error.response.data.error.errorMessage,
                }
            })
        }
    }
}