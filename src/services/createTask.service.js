import axios from "axios";
import config from './../../config';

const createTaskSerivce = async (data) => {
    try {
        await axios.post(config.apiUrl, {
            ...data
        })
    } catch (error) {
        console.log(error)
    }
    
};

export default createTaskSerivce;