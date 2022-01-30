import createTaskSerivce from './../services/createTask.service';
import deleteTaskService from './../services/deleteTask.service';
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
    },
    async createTask(context, payload) {
        const res = await createTaskSerivce(payload);
        await context.commit('createTask', {
            title: res.data.title,
            content: res.data.content,
            end: res.data.end,
        })
    },
    async deleteTask(context, payload) {
        const res = await deleteTaskService(payload);
        console.log(res)
        await context.commit('deleteTask', {
            taskId: payload
        })
    }
}