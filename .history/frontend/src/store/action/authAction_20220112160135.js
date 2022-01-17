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
            console.log(res.data)
        } catch (error) {
            console.error("Dispatch Error", error.response.data)
        }
    }
}