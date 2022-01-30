import  axios  from 'axios';
import config from '../../config';

const getTasksService = async () => {
    try {
        return await axios.get(config.apiUrl)
    } catch (error) {
        throw Error(error);
    }
};

export default getTasksService