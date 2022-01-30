import getTasksService from './../services/getTasks.service';

export default {
    async fetchAndSetTasks(context) {
        const res = await getTasksService();
        await context.commit('setTasks', res.data);
    },
}