import axios from "axios";
import config from "../../config";

const toggleTaskStatusService = async (taskId) => {
    try {
        return await axios.post(config.apiUrl + '/toggle/' + taskId, {
            taskId
        }  )  
    } catch (error) {
        throw Error(error)
    }
};

export default toggleTaskStatusService;