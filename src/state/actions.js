import getTasksService from './../services/getTasks.service';
import toggleTaskStatusService from './../services/toggleTaskStatus.service';

export default {
    async fetchAndSetTasks(context) {
        const res = await getTasksService();
        await context.commit('setTasks', res.data);
    },
    async toggleTaskStatus(context, payload) {
        const res = await toggleTaskStatusService(payload);
        await context.commit('toggleTaskStatus', {
            taskId: res.data._id,
            finished: res.data.finished
        })
    }
}