<template>
<div class="relative h-screen w-screen">
<the-header></the-header>
<the-modal  :title="modalTitle" description="Are you sure you want to delete this task? This action is irreversible" @close="closeModal" :isShown="isModalShown" @confirm="confirmDelete"></the-modal>
<div class="mt-20 mb-20 container mx-auto">
    <div class="w-full mb-10">
        <primary-button title="ADD TASK" @click="goToForm"></primary-button>
    </div>
    <tasks-list :tasks="store.getters.tasks" @delete="deleteTask"></tasks-list>
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
import { computed, ref } from "vue";

export default {
components: {
    TheHeader,
    TaskItem,
    PrimaryButton,
    TasksList,
    TheModal
},

setup() {

    const router = useRouter()
    const store = useStore()

    const isModalShown = ref(false)
    const deletingTaskId = ref(null)

    const goToForm = () =>{
        router.push('/create-task')
    }

    const closeModal = () => {
       isModalShown.value = false
       deletingTaskId.value = null
    }

    const deleteTask = (taskId) => {
         isModalShown.value = true
         deletingTaskId.value = taskId
    }

    const confirmDelete = () => {
         isModalShown.value = false
         store.dispatch('deleteTask', deletingTaskId.value)
         deletingTaskId.value = null;
    }

    const modalTitle = computed(()=>{
        const task = store.getters.tasks.filter(task => task._id === deletingTaskId.value)[0] 
        if(!task) return ''
        return `Delete task ${task.title}`
    })

    store.dispatch('fetchAndSetTasks');

    return {goToForm, store, closeModal, deleteTask, isModalShown, modalTitle,confirmDelete }
}
}
</script>