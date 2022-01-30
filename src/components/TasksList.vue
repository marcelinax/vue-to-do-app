<template>
<div class="w-full grid grid-cols-3 gap-8" v-if="tasks.length > 0">
    <task-item v-for="task in tasks" :key="task._id" :id="task._id" :content="task?.content" :title="task?.title" :end="task?.end" :isFinished="task?.finished" @toggleIsFinished="toggleTaskStatus" @delete="deleteTask"></task-item>
</div>
</template>
    
<script>
import { useStore } from 'vuex'
import TaskItem from './TaskItem.vue'
export default {
  components: { TaskItem },
    props: {
        tasks: {
            type: Array,
            default: () => []
        }
    },
    setup() {
        const store = useStore()

        const toggleTaskStatus = (taskId) =>{
             store.dispatch('toggleTaskStatus', taskId)
        }

        const deleteTask = (taskId) =>{
            store.dispatch('deleteTask', taskId)
        }

        return {toggleTaskStatus, deleteTask}
    },
}
</script>