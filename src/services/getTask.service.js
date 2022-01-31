import axios from "axios";
import config from '../../config';

const getTaskService = async (taskId) => {
    try {
        return await axios.get(config.apiUrl + '/' + taskId )
    } catch (error) {
        throw Error(error)
    }
};

export default getTaskService