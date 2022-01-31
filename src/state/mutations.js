export default {
    setTasks(state, payload) {
        state.tasks = [...payload]
    },
    toggleTaskStatus(state, { taskId, finished }) {
        state.tasks[state.tasks.findIndex(t => t._id === taskId)].finished = finished;
    },
    createTask(state, payload) {
        state.tasks[payload, [...state.tasks]]
    },
    deleteTask(state, { taskId }) {
        const taskIndex = state.tasks.findIndex(task => task._id === taskId);
        state.tasks.splice(taskIndex,1)
        state.tasks = [...state.tasks]
    },
    editTask(state, { data }) {
        state.task = { ...data };
    },
    setTask(state, payload) {
        state.task = payload;
    }
}