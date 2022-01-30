export default {
    setTasks(state, payload) {
        state.tasks = [...payload]
    },
    toggleTaskStatus(state, { taskId, finished }) {
        state.tasks[state.tasks.findIndex(t => t._id === taskId)].finished = finished;
    },
    createTask(state, payload) {
        state.tasks[payload, [...state.tasks]]
    }
}