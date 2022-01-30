import axios from "axios";
import config from "../../config";

const deleteTaskService = async (taskId) => {
    try {
       return await axios.delete(config.apiUrl + '/' + taskId)
    } catch (error) {
        throw Error(error)
    }
};

export default deleteTaskService