<template>
<div class="relative min-h-screen max-w-screen">
<the-header></the-header>
<the-modal  :title="modalTitle" :description="locales.modal_deleting_confirm_description" @close="closeModal" :isShown="isModalShown" @confirm="confirmDelete"></the-modal>
<div class="mt-20 mb-14 container mx-auto flex flex-col">
    <div class="w-full mb-10 flex flex-col md:flex-row md:justify-between md:items-center px-5 md:px-0">
        <the-search v-model="searchQuery"></the-search>
        <primary-button :title="locales.add_task" @click="goToForm" class="mt-5 md:mt-0"></primary-button>
    </div>
    <tasks-list :tasks="store.getters.tasks" @delete="deleteTask"></tasks-list>
</div>
</div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TaskItem from "../components/TaskItem.vue";
import TheSearch from "../components/TheSearch.vue";
import PrimaryButton from "../components/buttons/PrimaryButton.vue";
import {  useRouter } from 'vue-router';
import { useStore } from "vuex";
import TasksList from "../components/TasksList.vue";
import TheModal from "../components/TheModal.vue";
import { computed, ref, watch } from "vue";
import { locales } from "../../locales";

export default {
components: {
    TheHeader,
    TaskItem,
    PrimaryButton,
    TasksList,
    TheModal,
    TheSearch
},

setup() {

    const router = useRouter()
    const store = useStore()

    const isModalShown = ref(false)
    const deletingTaskId = ref(null)
    const searchQuery = ref('');

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

    const searchTasks = () =>{
        store.dispatch('searchTasks', searchQuery.value)
    }

    const modalTitle = computed(()=>{
        const task = store.getters.tasks.filter(task => task._id === deletingTaskId.value)[0] 
        if(!task) return ''
        return `Delete task ${task.title}`
    })

  
    store.dispatch('searchTasks');
    
     watch(() => searchQuery.value,()=>{
        searchTasks()
    })

    return {goToForm, store, closeModal, deleteTask, isModalShown, modalTitle, confirmDelete, locales, searchTasks, searchQuery }
}
}
</script>