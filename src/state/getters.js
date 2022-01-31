import moment from "moment";

export default {
    tasks(state) {
        return state.tasks || [];
    },
    task(state) {
        return state.task;
    }
}