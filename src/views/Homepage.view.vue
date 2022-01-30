<template>
<div>
<the-header></the-header>

<div class="mt-20 mb-20 container mx-auto">
    <div class="w-full mb-10">
        <primary-button title="ADD TASK" @click="goToForm"></primary-button>
    </div>
    <tasks-list :tasks="store.getters.tasks"></tasks-list>
</div>
</div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TaskItem from "../components/TaskItem.vue";
import PrimaryButton from "../components/buttons/PrimaryButton.vue";
import {  useRouter } from 'vue-router';
import { useStore } from "vuex";
import TasksList from "../components/TasksList.vue";

export default {
    components: {
    TheHeader,
    TaskItem,
    PrimaryButton,
    TasksList
},
    setup() {

        const router = useRouter()
        const store = useStore()

        const goToForm = () =>{
            router.push('/create-task')
        }

        store.dispatch('fetchAndSetTasks');

        return {goToForm, store}
    }
}
</script>