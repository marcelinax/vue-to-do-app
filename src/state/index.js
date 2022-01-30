import actions from "./actions";
import { createStore } from "vuex";
import getters from "./getters";
import mutations from "./mutations";

export const store = createStore({
    state() {
        return {
            tasks: [],
            task: null
        }
    },
    mutations ,
    actions,
    getters 
})