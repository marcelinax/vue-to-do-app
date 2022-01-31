import axios from "axios";
import config from "../../config";

const editTaskService = async (taskId, data) => {
    try {
        return await axios.put(config.apiUrl + '/' + taskId, {
            ...data
        })
    } catch (error) {
        throw Error(error)
    }
};

export default editTaskService