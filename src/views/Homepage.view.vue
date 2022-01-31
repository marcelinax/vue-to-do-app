<template>
<div class="relative h-screen w-screen">
<the-header></the-header>
<the-modal title="Delete task Papier prezentowy" description="Are you sure to delete this task?" @close="closeModal"></the-modal>
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
import TheModal from "../components/TheModal.vue";

export default {
components: {
    TheHeader,
    TaskItem,
    PrimaryButton,
    TasksList,
    TheModal
},
props: ['isModalShown'],
setup(props) {

    const router = useRouter()
    const store = useStore()

    const goToForm = () =>{
        router.push('/create-task')
    }

    const closeModal = () => {
        props.isModalShown = !props.isModalShown
    }

    store.dispatch('fetchAndSetTasks');

    return {goToForm, store, closeModal}
}
}
</script>