import axios from 'axios'

export const userRegister = (data) => {
    return async(dispatch) => {


const config = {
    Headers:{
        'Content-Type':'application/json'
    }
}

        try {
            const res = await axios.post('/api/messenger/user-register', data, config)
        } catch (error) {
            console.error("Dispatch Error", error)
        }
    }
}