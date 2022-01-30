import axios from "axios";
import config from './../../config';

const createTaskSerivce = async (data) => {
    try {
       return await axios.post(config.apiUrl, {
            ...data
        })
    } catch (error) {
       throw Error(error)
    }
    
};

export default createTaskSerivce;