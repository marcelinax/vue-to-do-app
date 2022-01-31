import createTaskSerivce from './../services/createTask.service';
import deleteTaskService from './../services/deleteTask.service';
import editTaskService from './../services/editTask.service';
import getTaskService from './../services/getTask.service';
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
        await deleteTaskService(payload);
        await context.commit('deleteTask', {
            taskId: payload,
        })
    },
    async fetchAndSetTask(context, payload) {
        const res = await getTaskService(payload);
        await context.commit('setTask', res.data);
    },
    async editTask(context, payload) {
        const res = await editTaskService(payload._id, payload);
        await context.commit('editTask', {
            taskId: res.data._id,
            title: res.data.tile,
            content: res.data.content,
            end: res.data.end,
            finished: res.data.finished
        })
    }
}