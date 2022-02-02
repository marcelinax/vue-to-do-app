import axios from 'axios';
import config from '../../config';

const searchTasksService = async (query) => {
    try {
        return await axios.post(config.apiUrl + '/search', {
            query
        })
    } catch (error) {
        throw Error(error)
    }
};

export default searchTasksService;